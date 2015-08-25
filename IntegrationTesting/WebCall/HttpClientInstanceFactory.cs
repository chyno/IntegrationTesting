namespace IntegrationTesting.WebCall
{
    using System;
    using System.Net;
    using System.Net.Http;
    using System.Net.Http.Headers;

    public class HttpClientInstanceFactory
    {


        public static HttpClient CreateHttpClient()
        {

            var serviceAccount = System.Configuration.ConfigurationManager.AppSettings["RsApiServiceUser"];
            var serviceAccountPass = System.Configuration.ConfigurationManager.AppSettings["RsApiServiceUserPass"];
            /*
            var handler = new HttpClientHandler()
                              {
                                  // UseDefaultCredentials = true
                                  Credentials =
                                      new NetworkCredential(
                                      serviceAccount,
                                      serviceAccountPass, "NRECA")
                              };
            
            var handler = new HttpClientHandler()
            {
                UseDefaultCredentials = true
    
            };
            */
            WebRequestHandler handler;
            if (string.IsNullOrEmpty(serviceAccount))
            {
                handler = new WebRequestHandler
                {
                    UseDefaultCredentials = true
                   
                };
            }
            else
            {
                handler = new WebRequestHandler
                {
                    // UseDefaultCredentials = true
                    Credentials =
                     new NetworkCredential(
                     serviceAccount,
                     serviceAccountPass, "NRECA")
                };
            }
          

            handler.PreAuthenticate = true;
            handler.UnsafeAuthenticatedConnectionSharing = true;

           handler.ServerCertificateValidationCallback += (sender, certificate, chain, sslPolicyErrors) => true;

            var rsHttpClient = new HttpClient(handler);
            var url = System.Configuration.ConfigurationManager.AppSettings["RsApiUrl"];
            rsHttpClient.BaseAddress = new Uri(url);
            rsHttpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("Application/json"));

            ServicePointManager.ServerCertificateValidationCallback +=
                (sender, certificate, chain, sslPolicyErrors) => true;

            return rsHttpClient;
        }
    }
}