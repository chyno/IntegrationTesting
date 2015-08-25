namespace IntegrationTesting.Model
{
    public class TestContract
    {
        private string contractName;

        public int ContractId { get; set; }

        public string ContractName
        {
            get
            {
                return this.contractName;
            }
            set
            {
                if (!string.IsNullOrEmpty(value))
                {
                    this.contractName = value.Trim();
                }
                else
                {
                    value = string.Empty;
                }


            }
        }
    }
}