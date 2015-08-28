namespace IntegrationTesting.Database
{
    using System;
    using System.Collections.Generic;
    using System.Data.SqlClient;
    using System.Linq;

    using IntegrationTesting.Model;

    using IntegrationTests.Database;

    public static class DbUtility
    {
        /*
         SELECT TOP 1000 [TestRequestFileId]
      ,[TestFileDescription]
      ,[InputJson]
      ,[TestNumber]
      ,[ContractId]
      ,[OutputJson]
  FROM [RSP_AAT_TestFiles].[dbo].[TestRequestFile]
         * */

        private const string SelectAllTestCommand = @"SELECT t.[TestRequestFileId], t.[TestFileDescription], t.[InputJson] , t.[TestNumber], t.[ContractId], t.[OutputJson] from (SELECT [TestRequestFileId] ,[OutputJson], [TestFileDescription], [InputJson] ,[TestNumber],[ContractId], CAST([TestNumber] AS int) as TestNumberValue FROM [RSP_AAT_TestFiles].[dbo].[tblTestRequestFile] where  (ContractId =  @ContractId)) t order by t.TestNumberValue";
        private const string SelectAllTestByAppCommand = @"SELECT t.[TestRequestFileId],  t.[TestFileDescription],  t.[InputJson] , t.[TestNumber], t.[ContractId],  t.[OutputJson] from ( SELECT tblTestRequestFile.TestRequestFileId, tblTestRequestFile.OutputJson, tblTestRequestFile.TestFileDescription, tblTestRequestFile.InputJson, tblTestRequestFile.TestNumber,  tblTestRequestFile.ContractID, CAST(tblTestRequestFile.TestNumber AS int) AS TestNumberValue, Contract.[FK_ApplicationId] FROM     tblTestRequestFile INNER JOIN Contract ON tblTestRequestFile.ContractID = Contract.ContractId WHERE  (tblTestRequestFile.ContractID = @ContractId and Contract.[FK_ApplicationId] = @ApplicationId))  t order by t.TestNumberValue";

        //private const string SelectAllTestCommand = @"SELECT t.[TestFileDescription], t.[InputJson] , t.[TestNumber], t.[ContractId], t.[OutputJson] from (SELECT [TestFileDescription], [InputJson] ,[TestNumber],[ContractId], CAST([TestNumber] AS int) as TestNumberValue FROM [RSP_AAT_TestFiles].[dbo].[TestRequestFile] where  (ContractId =  @ContractId)) t order by t.TestNumberValue";


        private const string SelectOneTestCommand = @"SELECT TestRequestFileId, [TestFileDescription], [InputJson] ,[TestNumber],[ContractId], [OutputJson] FROM [RSP_AAT_TestFiles].[dbo].[TestRequestFile] where  (ContractId = @ContractId) and (TestNumber = @TestNumber)";
        private const string SelectDistinctContracts = @"SELECT [ContractId],[ContractName] FROM [RSP_AAT_TestFiles].[dbo].[Contract] where [FK_ApplicationId] = @ApplicationId";
        private const string SelectContractById = @"SELECT [ContractName] FROM [RSP_AAT_TestFiles].[dbo].[Contract] where [ContractId] = @ContractId";
        private const string SelectUrlByContractName = @"SELECT [EndPointUrl] FROM [RSP_AAT_TestFiles].[dbo].[Contract] where [ContractName] = @ContractName";
        private const string UpdateInputJason = @"UPDATE [dbo].[tblTestRequestFile] SET [InputJson] = @InputJson WHERE [TestNumber] = @TestNumber and [ContractID] = @ContractID";
        private const string DeleteTtestStr = @"Delete [dbo].[tblTestRequestFile]  WHERE [TestRequestFileId] = @TestRequestFileId";
        private const string AddTestStr = @"INSERT INTO [dbo].[tblTestRequestFile] ([TestFileDescription] ,[InputJson],[TestNumber] ,[ContractID] ,[OutputJson]) VALUES (@TestFileDescription,@InputJson,@TestNumber, @ContractID, @OutputJson)";
        private const string UpdateTestStr = @"UPDATE [dbo].[tblTestRequestFile] SET  [TestFileDescription] = @TestFileDescription ,[InputJson] = @InputJson ,[TestNumber] = @TestNumber ,[OutputJson] = @OutputJson ,[ContractID] = @ContractID WHERE  TestRequestFileId = @TestRequestFileId";



        public static List<TestItem> GetTestItems(int appId, int contractId, string testNumber)
        {
            List<TestItem> result = null;
            string connectionString = GetConnectionString();

            var param = new { ContractId = contractId, ApplicationId = appId };
            using (var connection = new SqlConnection(connectionString))
            {
                result = connection.Query<TestItem>(SelectAllTestByAppCommand, param).ToList();
            }
            var tstNumber = testNumber.Trim();

            if (tstNumber.Equals("*"))
            {
                return result;
            }
            else
            {
                var items = tstNumber.Split('-');
                if (items.Count() == 2)
                {
                    int lowerBound = Int32.Parse(items[0]);
                    int upperBound = Int32.Parse(items[1]);

                    return result.Where(t => t.TestNumberVal >= lowerBound && t.TestNumberVal <= upperBound).ToList();
                }
                else
                {
                    return result.Where(t => t.TestNumber.Trim().Equals(testNumber.Trim())).ToList();
                }

            }
        }

        public static List<TestItem> GetTestItems(int contractId, string testNumber)
        {
            List<TestItem> result = null;
            string connectionString = GetConnectionString();

            var param = new { ContractId = contractId };
            using (var connection = new SqlConnection(connectionString))
            {
                result = connection.Query<TestItem>(SelectAllTestCommand, param).ToList();
            }
            var tstNumber = testNumber.Trim();

            if (tstNumber.Equals("*"))
            {
                return result;
            }
            else
            {
                var items = tstNumber.Split('-');
                if (items.Count() == 2)
                {
                    int lowerBound = Int32.Parse(items[0]);
                    int upperBound = Int32.Parse(items[1]);

                    return result.Where(t => t.TestNumberVal >= lowerBound && t.TestNumberVal <= upperBound).ToList();
                }
                else
                {
                    return result.Where(t => t.TestNumber.Trim().Equals(testNumber.Trim())).ToList();    
                }
                
            }
            
        }


        public static TestItem GetTestItems(string contractName, string testNumber)
        {
            TestItem result = null;
            string connectionString = GetConnectionString();

            var param = new { ContractName = contractName,TestNumber = testNumber };
            
            using (var connection = new SqlConnection(connectionString))
            {
                result = connection.Query<TestItem>(SelectOneTestCommand,param ).First();
            }
            return result;
        }

        public static List<TestContract> GetDistinctContracts(int appId)
        {
            List<TestContract> result = null;
            string connectionString = GetConnectionString();

            var param = new {ApplicationId = appId };

            using (var connection = new SqlConnection(connectionString))
            {
                result = connection.Query<TestContract>(SelectDistinctContracts, param).ToList();
            }
            return result;
        }

        private static string GetConnectionString()
        {
            return System.Configuration.ConfigurationManager.ConnectionStrings["RsAatTestFiles"].ConnectionString; //AppSettings["RsApiServiceUser"];
        }

      


        public static bool DeleteTest(string strid)
        {
            int id = -1;
            int.TryParse(strid, out id);

            string connectionString = GetConnectionString();
            var param = new { TestRequestFileId = id  };
            var successUpdate = false;
            using (var connection = new SqlConnection(connectionString))
            {
                //  result = connection.Query<TestItem>(SelectOneTestCommand, param).First();

                try
                {
                    var res = connection.Execute(DeleteTtestStr, param);
                    successUpdate = true;
                }
                catch (Exception)
                {

                    successUpdate = false;
                }
            }
            return successUpdate;
        }

        public static string AddTest(TestItem item)
        {
            var updateMessage = string.Empty;
            string connectionString = GetConnectionString();
            var param = new
            { item.ContractId, item.TestNumber, item.InputJson, item.TestFileDescription, item.OutputJson
            };
           
            using (var connection = new SqlConnection(connectionString))
            {
                //  result = connection.Query<TestItem>(SelectOneTestCommand, param).First();

                try
                {
                   connection.Execute(AddTestStr, param);
                   
                }
                catch (Exception excep)
                {

                    updateMessage = excep.Message;
                }

                return updateMessage;

            }
        }

        public static string GetContractNameById(int contractId)
        {
            var result = string.Empty;
            string connectionString = GetConnectionString();

            var param = new { ContractId = contractId};

            using (var connection = new SqlConnection(connectionString))
            {
                result = connection.Query<string>(SelectContractById, param).FirstOrDefault();
            }
            return result;
        }

        public static string UpdateTest(TestItem item)
        {
            var updateMessage = string.Empty;
            string connectionString = GetConnectionString();
            var param = new
            { item.ContractId, item.TestNumber, item.InputJson, item.TestFileDescription, item.OutputJson, item.TestRequestFileId
            };
           
            using (var connection = new SqlConnection(connectionString))
            { try
                {
                     connection.Execute(UpdateTestStr, param);
                    
                }
                catch (Exception excep)
                {

                    updateMessage = excep.Message;
                }

                return updateMessage;
            }
        }

        public static string GetUrlByContract(string contractname)
        {
            var result = string.Empty;
            string connectionString = GetConnectionString();

            var param = new { ContractName = contractname };

            using (var connection = new SqlConnection(connectionString))
            {
                result = connection.Query<string>(SelectUrlByContractName, param).FirstOrDefault();
            }
            return result;
        }

        public static string GetApplication()
        {
            return GetApplication(1);
        }

        private static string GetApplication(int appId)
        {
            var result = string.Empty;
            string connectionString = GetConnectionString();

            var param = new { ApplicationId = appId };

            using (var connection = new SqlConnection(connectionString))
            {
                result = connection.Query<string>(@"SELECT  [ApplicationName] FROM [RSP_AAT_TestFiles].[dbo].[Application] where ApplicationId = @ApplicationId", param).FirstOrDefault();
            }
            return result;
        }


        public static List<string> GetApplications()
        {
            List<string> result = null;
            string connectionString = GetConnectionString();

           

            using (var connection = new SqlConnection(connectionString))
            {
                result = connection.Query<string>(@"SELECT  [ApplicationName] FROM [RSP_AAT_TestFiles].[dbo].[Application]").ToList();
            }
            return result;
        }

    }
}