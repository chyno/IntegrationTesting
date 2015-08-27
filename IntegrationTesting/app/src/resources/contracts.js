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
        this.data.getApplications().then(apps => 
        {  
            
            console.log("*** In constructor");
            this.applications = apps;
            var curapp = this.applications[0];
            this.selectedApplication = curapp.ApplicationName;
           this.data.getContracts(curapp.Id).then(contracts => {this.contracts = contracts; });
            

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
           