namespace IntegrationTesting.Controllers
{
    using System.Net;
    using System.Net.Http;
    using System.Web.Http;

    using IntegrationTesting.Database;
    using IntegrationTesting.Model;

    public class TestAddController : ApiController
    {


        // GET api/<controller>/5
        public string Get()
        {
            return "Hello Form TestSave";
        }


        // POST: api/SaveTest

        public void Post([FromBody] TestItem item)
        {
            var result = string.Empty;
            System.Console.WriteLine(item.ContractId);
            if (item.TestRequestFileId < 0)
            {

                result = DbUtility.AddTest(item);
            }
            else
            {
                result = DbUtility.UpdateTest(item);
            }

            if (!string.IsNullOrEmpty(result))
            {
                throw new HttpResponseException(new HttpResponseMessage(HttpStatusCode.InternalServerError)
                                                    {
                                                        Content = new StringContent(result),
                                                        ReasonPhrase = "Error updateing database"
                                                    });
            }
        }

    }
}