import {inject} from "aurelia-framework";
import {HttpClient} from "aurelia-http-client";

let baseAppUrl = "../api/Application";
//let baseAppUrl = "http://localhost/IntegrationTesting2/api/Application";

//let baseCOntractsUrl = "http://localhost/IntegrationTesting2/api/Contracts/2";
let baseContractsUrl = "../api/Contracts/";



@inject(HttpClient)
export class TestData {

    CurrentApplication;
    CurrentContract;

    constructor(httpClient) {
        this.http = httpClient;
        this.CurrentApplication = null;
        this.CurrentContract = null;
        this.oldContractId = -1;
        this.oldAppId = -1;
        
    }

    getById(id) {
        return {id: id, TestName: "test 1"};

    }

    getAll() {
        return [{id: 1, TestName: "test 1"}, {id: 2, TestName: "test 2"}, {id: 3, TestName: "test 3"}];
        
    }

    needsRefresh() {
        return  this.oldContractId != this.CurrentContract.ContractId || this.oldAppId != this.CurrentApplication.Id;
    }

    getApplications()
    {
        console.log("******** getting appications *****");
        var tstObj = [{ Id : 1, ApplicationName : "RS" }, { Id : 2, ApplicationName : "BW" }];

        var p1 = new Promise(function(resolve, reject) { 
            resolve(tstObj);
        });
        //return [{ Id = 1, ApplicationName = "RS" }, { Id = 2, ApplicationName = "BW" }];
        return p1;
       
        
    }

    setCurrentState() {
        if (this.CurrentContract) {
            this.oldContractId = this.CurrentContract.ContractId;
            this.oldAppId = this.CurrentApplication.Id;
        }
    }
    setCurrentContract(contractName, contracts) {

        var newcontract =  contracts.filter((contract) => { return contract.ContractName === contractName })[0];
        this.CurrentContract = newcontract;

        
    }
    
    getContracts(appId)
    {
        var rsContrantracts =  [{ ContractName : "Find Ben RS", ContractId : 1 },  { ContractName : "Add Ben Gems", ContractId : 2 }];
        var bwContrantracts =  [{ ContractName : "Find Ben BW", ContractId : 1 },  { ContractName : "Add Ben GBW", ContractId : 2 }];

        var p1 = new Promise(function(resolve, reject) { 
            if (appId === 1)
            {
                resolve(rsContrantracts);
            }
            else
            {
                resolve(bwContrantracts);
            }
            
        });
        return p1;

        
    }
}