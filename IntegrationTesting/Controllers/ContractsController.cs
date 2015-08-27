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

        public TestContract[] Get(int id)
        {
            if (id == 1)
            {
                return new System.Collections.Generic.List<TestContract> { new TestContract { ContractName = "Find Ben Gems", ContractId = 1 }, new TestContract { ContractName = "Add Ben Gems", ContractId = 2 } }.ToArray();
            }
            else
            {
                return new System.Collections.Generic.List<TestContract> { new TestContract { ContractName = "Find Ben RSP", ContractId = 1 }, new TestContract { ContractName = "Add Ben RSP", ContractId = 2 } }.ToArray();
            }
            return DbUtility.GetDistinctContracts().ToArray();
        }
    }

    
}