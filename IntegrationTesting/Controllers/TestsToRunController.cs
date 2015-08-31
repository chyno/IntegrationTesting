namespace IntegrationTesting.Controllers
{
    using System.Collections.Generic;
    using System.Web.Http;

    using IntegrationTesting.Database;
    using IntegrationTesting.Model;

    public class TestsToRunController : ApiController
    {


        // GET api/<controller>/5
        public List<TestItem> Get(int id, int cId, string testNumber)
        {
            List<TestItem> result;
            //  List<TestItem> result = DbUtility.GetTestItems(id, testNumber);
            //  result = DbUtility.GetTestItems(id,cId, testNumber);
            result = new List<TestItem>() {new TestItem() {ContractId = 1, InputJson = "{'foo': 'bar'",OutputJson = "{result",TestFileDescription = "mock data", TestNumber = "1"} };
            return result;
        }
 


    }
}