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

            //  List<TestItem> result = DbUtility.GetTestItems(id, testNumber);
           List<TestItem> result = DbUtility.GetTestItems(id,cId, testNumber);
            return result;
        }
 


    }
}