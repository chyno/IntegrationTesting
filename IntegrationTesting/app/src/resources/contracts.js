import {inject} from "aurelia-framework";
import {TestData} from "../testData";

@inject(TestData)
export class Contracts
{ 
    constructor(testData)
    {
        this.selectedContract = null ;
        this.selectedApplication = null ;
        //this.contracts = [{Id : 1, ContractName :"FindBeneficiary" }, {Id : 2, ContractName : "Add Beneficiary" }];
        this.data = testData;

        testData.getCurrrentApplication().then(app => {
            this.ApplicationName = app.ApplicationName;
            testData.getContracts(app.Id).then(contracts => {this.contracts = contracts; });    
        });
     }
    
    selectApplication()
    {
        alert('Selected Application : ' + this.selectedApplication);
    }

    selectContract()
    {
        alert('Selected Contracts : '  + selectedContract);
    } 

   
}     