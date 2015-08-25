namespace IntegrationTesting.Controllers
{
    using System.Web.Http;

    using IntegrationTesting.Database;
    using IntegrationTesting.Model;

    using IntegrationTests.WebCall;

    public class TestResultsController : ApiController
    {


        // GET api/<controller>/5
        public string Get(string testNumber, string contractName)
        {
            //var requestItems = testId.Split('_');
            // var testNumber = requestItems[0];
            //  var contractName = requestItems[1];
            var testItem = DbUtility.GetTestItems(contractName, testNumber);
            var url = RsApi.GetUrl(contractName);

            var resutlJason = RsApi.Request(testItem.InputJson, url);

            return resutlJason;
        }

        // POST: api/SaveTest
        public string Post([FromBody] TestItem item)
        {
            // DbUtility.UpdateJson(item.ContractId, item.TestNumber, item.InputJson);
            var contractName = DbUtility.GetContractNameById(item.ContractId);

            var url = RsApi.GetUrl(contractName);
            var resutlJason = RsApi.Request(item.InputJson, url);

            return resutlJason;
        }

    }
}