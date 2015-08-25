namespace IntegrationTesting.Controllers
{
    using System.Web.Http;

    using IntegrationTesting.Database;
    using IntegrationTesting.Model;

    public class ContractsController : ApiController
    {


        // GET api/<controller>/5
        public TestContract[] Get()
        {
            return DbUtility.GetDistinctContracts().ToArray();
        }
    }
}