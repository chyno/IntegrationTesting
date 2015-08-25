namespace IntegrationTesting.Model
{
    using System;

    public class TestItem
    {
        private string inputJson;

        private string testNumber;

 

        private string testFileDescription;

        public string InputJson
        {
            get
            {
                return this.inputJson;
            }
            set
            {
                this.inputJson = value;
            }
        }

        public int TestRequestFileId { get; set; }

        public string TestNumber
        {
            get
            {
                if (string.IsNullOrEmpty(this.testNumber)) return this.testNumber;

                return this.testNumber.Trim();
            }
            set
            {
                this.testNumber = value;
            }
        }

        public int ContractId { get; set; }

        public string TestFileDescription
        {
            get
            {
                if (string.IsNullOrEmpty(this.testFileDescription)) return this.testFileDescription;

                return this.testFileDescription.Trim();
            }
            set
            {
                this.testFileDescription = value;
            }
        }

        public object OutputJson { get; set; }

        public int TestNumberVal
        {
            get
            {
                if (string.IsNullOrEmpty(this.TestNumber)) return 0;

                return Int32.Parse(this.testNumber);
            }
            
        }
    }
}