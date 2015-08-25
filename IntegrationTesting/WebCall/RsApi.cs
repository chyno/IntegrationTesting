namespace IntegrationTests.WebCall
{
    using System;
    using System.Collections.Generic;
    using System.Net.Http;
    using System.Text;
    using Newtonsoft.Json;
    using IntegrationTesting.Database;
    using IntegrationTesting.WebCall;

    using Microsoft.Ajax.Utilities;

    public class RsApi
    {

        public static string Request(string inputJson, string requestUrl)
        {
            //var testjson = "{'Attachments': [],'Header': {},'Body': {'Criteria':{'EmployeeCID':'001462191','BeneficiaryCategory':'Active'}}}";
           
            var result = string.Empty;
            using (var httpClient = HttpClientInstanceFactory.CreateHttpClient())
            {
                var httpResponse = httpClient.PostAsync(requestUrl, new StringContent(inputJson, Encoding.UTF8, "application/json")).Result; //PostAsJsonAsync(requestUrl, request).Result;
                if (httpResponse.IsSuccessStatusCode)
                {
                    result = httpResponse.Content.ReadAsStringAsync().Result;
                        //ReadAsAsync<ResponseMessage<TResponse>>().Result;
                }

            }

            //Make json formatted
            dynamic obj = JsonConvert.DeserializeObject(result);
            var formtResult = JsonConvert.SerializeObject(obj, Formatting.Indented);
            return formtResult;
        }

        public static string GetUrl(string contractName)
        {
            //UpdateInstitutionalBenneficiaryProfile
           
            var url = string.Empty;
            url = DbUtility.GetUrlByContract(contractName.Trim());
            /*
            switch (contractName.Trim())
            {
                case "AddBeneficiaries":
                    url = "v1/AddBeneficiary";
                    break;
                case "UpdateInstitutionalBenneficiaryContact":
                    url = "v1/UpdateInstitutionBeneficiaryContactInfo";
                   break;

                case "UpdateInstitutionalBenneficiaryProfile":
                    url = "v1/UpdateInstitutionBeneficiaryProfile";
                    break;

                case "UpdateIndividualBeneficiaryProfile":
                    url = "v1/UpdateIndividualBeneficiaryProfile";
                    break;
                case "UpdateIndBennyContact":
                    url = "v1/UpdateIndividualBeneficiaryContactInfo";
                    break;
                case "UpdateBeneficiaryAllocations":
                    url = "v1/UpdateBeneficiaryAllocation";
                    break;
                case "FindBeneficiaries":
                    url = "v1/findbeneficiary";
                    break;
                case "UpdateEmployeeProfileContactInfo":
                    url = "v1/UpdateEmployeeProfileContactInfo";
                    break;
                case "UpdateIEmployeeBeneficiaryProfile":
                    url = "v1/UpdateEmployeeProfileContactInfo";
                    break;

            }
            */
            return url;
        }

        
    }
}