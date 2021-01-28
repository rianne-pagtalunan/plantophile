using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Plantophile.ResourceModel
{
    public class AuthenticationResponseModel
    {
        public AuthenticationResponseModel(string userName, string accessToken)
        {
            this.AccessToken = accessToken;
            this.UserName = userName;
        }

        [JsonProperty]
        public string AccessToken { get; }

        [JsonProperty]
        public string UserName { get; }
    }
}
