namespace IntegrationTesting.Controllers
{
    using System;
    using System.Web;
    using System.Web.Http;

    using IntegrationTesting.Database;
    using IntegrationTesting.Model;

    public class DbRefreshController : ApiController
    {
        // GET: api/DbRefresh
        public bool Get()
        {
            Console.Write("Build Complete");
            return true;
            // return this.Buildv2();
        }

       

    }



    public class TestSaveController : ApiController
    {


        // GET api/<controller>/5
        public string Get()
        {
            return "Hello Form TestSave";
        }

        // POST: api/SaveTest
        public void Post([FromBody] TestItem item)
        {
            //DbUtility.UpdateJson(item.ContractId, item.TestNumber, item.InputJson);
        }


        public void Delete(string id)
        {
            DbUtility.DeleteTest(id);
        }

    }
}