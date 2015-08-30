﻿import {inject} from "aurelia-framework";
import {HttpClient} from "aurelia-http-client";

let baseAppUrl = "../api/Application";
//let baseAppUrl = "http://localhost/IntegrationTesting2/api/Application";

//let baseCOntractsUrl = "http://localhost/IntegrationTesting2/api/Contracts/2";
let baseContractsUrl = "../api/Contracts/";

//api/TestsToRun/1?cId=12&testNumber=4-10
let baseTests = "../api/TestsToRun/";

let baserunTets = "../api/TestResults";
let TestAdd = "../api/TestAdd";

@inject(HttpClient)
export class TestData {

    CurrentApplication ;
    CurrentContract ;
    Applications ;
    constructor(httpClient) {
        this.http = httpClient;
        this.CurrentApplication = null;
        this.CurrentContract = null;
        this.oldContractId = -1;
        this.oldAppId = -1;

        this.getApplications().then(apps => {
            this.Applications = apps;
        });

    }


getContractTests(testNumber) {
    ////api/TestsToRun/1?cId=12&testNumber=4-10
    var url = baseTests + this.CurrentApplication.Id + "?cId=" + this.CurrentContract.ContractId + "&testNumber=" + testNumber;
    console.log(url);
    return this.http
        .get(url)
                    .then(response => {
                        return response.content;
                    });      
}

needsRefresh() {
    return  this.oldContractId != this.CurrentContract.ContractId || this.oldAppId != this.CurrentApplication.Id;
}

getApplications()
{
    console.log("******** getting contracts *****");
    var url = baseAppUrl;
    console.log(url);
    return this.http
        .get(url)
                    .then(response => {
                        return response.content;
                    });      
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
    console.log("******** getting contracts *****");
    var url = baseContractsUrl + appId;
    console.log(url);
    return this.http
        .get(url)
                    .then(response => {
                        return response.content;
                    });
}

runTest(model) {
    return this.post(baserunTets, model).then(response => {
        return response;
    });
}

saveTest(model) {
    return this.post(TestAdd, model).then(response => {
        return response;
    });
}
}