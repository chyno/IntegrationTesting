namespace IntegrationTesting.Controllers
{
    using System.Collections.Generic;
    using System.Web.Http;

    using IntegrationTesting.Database;
    using IntegrationTesting.Model;

    public class TestsToRunController : ApiController
    {


        // GET api/<controller>/5
        public List<TestItem> Get(int id, string tests)
        {

            List<TestItem> result = DbUtility.GetTestItems(id, tests);
            return result;
        }


    }
}