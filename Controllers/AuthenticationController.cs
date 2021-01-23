using Microsoft.AspNetCore.Mvc;
using Plantophile.ResourceModel;
using System.IdentityModel.Tokens.Jwt;
using System.Threading.Tasks;

namespace Plantophile.Controllers
{
    [Route("api/v1/authentication")]
    public class AuthenticationController : Controller
    {
        private readonly string defaultUserName1 = "johndoe@mail.co";
        private readonly string defaultUserName2 = "janedoe@mail.co";
        private readonly string defaultPassword = "doe12345!";
        
        /// <summary>
        /// Authenticates the user.
        /// </summary>
        /// <param name="loginModel"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> Login([FromBody]LoginModel loginModel)
        {
            if (!loginModel.EmailAddress.Equals(this.defaultUserName1) && !loginModel.EmailAddress.Equals(this.defaultUserName2))
            {
                return this.Forbid("Invalid username/password submitted.");
            }
            if (loginModel.PlainTextPassword.Equals(this.defaultPassword))
            {
                JwtSecurityToken dummyToken = new JwtSecurityToken(issuer: "PlantoPhile");
                var serializedToken = new JwtSecurityTokenHandler().WriteToken(dummyToken);
                string username = loginModel.EmailAddress.Equals(this.defaultUserName1) ?
                    "John Doe" :
                    "Jane Doe";
                return this.Ok(new AuthenticationResponseModel(username, serializedToken));
            }

            return this.Forbid("Invalid username/password submitted");

        }
    }
}
