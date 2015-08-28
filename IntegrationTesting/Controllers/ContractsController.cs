namespace IntegrationTesting.Controllers
{
    using System.Web.Http;

    using IntegrationTesting.Database;
    using IntegrationTesting.Model;

    public class ContractsController : ApiController
    {

        public TestContract[] Get(int id)
        {
            return DbUtility.GetDistinctContracts(id).ToArray();
        }
    }

    
}