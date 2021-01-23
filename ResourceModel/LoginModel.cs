using System.ComponentModel.DataAnnotations;

namespace Plantophile.ResourceModel
{
    public class LoginModel
    {
        [Required]
        [EmailAddress]
        public string EmailAddress { get; set; }

        public string PlainTextPassword { get; set; }
    }
}
