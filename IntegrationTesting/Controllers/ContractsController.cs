namespace IntegrationTesting.Controllers
{
    using System.Collections.Generic;
    using System.Web.Http;

    using IntegrationTesting.Database;
    using IntegrationTesting.Model;

    public class ContractsController : ApiController
    {

        public TestContract[] Get(int id)
        {
            if (id == 1)
            {
                return new List<TestContract> {new TestContract() {ContractId = 1, ContractName = "RS Find Ben"} }.ToArray();
            }
            else
            {
                return new List<TestContract> { new TestContract() { ContractId = 1, ContractName = "BW Find Ben" } }.ToArray();
            }
           // return DbUtility.GetDistinctContracts(id).ToArray();
        }
    }

    
}