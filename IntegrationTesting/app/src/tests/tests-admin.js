import {inject} from "aurelia-framework";
import {TestData} from "../testData";


@inject(TestData)
export class TestsAdmin{

    constructor(testData) {
        this.contracts = null;
        this.applications = null;
        this.data = testData;  
        this.selectedContract = null ;
        this.data.getApplications().then(apps => 
        {  
            this.applications = apps;
                        
            

        }); 
    }

    changeApplication() {
        
        var app = this.applications.filter((app) => { return app.ApplicationName === this.selectedApplication })[0];
        this.data.CurrentApplication = app;
        this.displayContracts(app.Id);
    }
    
    activate(params, routeconfig) {
        this.setAppTitle = routeconfig.setAppTitle;
        if (this.data.CurrentApplication) {
            this.selectedApplication = this.data.CurrentApplication.ApplicationName;
            this.displayContracts(this.data.CurrentApplication.Id);
            if (this.data.CurrentContract) {
                this.selectedContract = this.data.CurrentContract.ContractName;
                                                   
            }
        }  
  
    }

    displayContracts(appId) {

        this.data.getContracts(appId).then(contracts => {
            this.contracts = contracts;

        }); 
    }

    selectContract() {
        var contract =  this.contracts.filter((contract) => { return contract.ContractName === this.selectedContract })[0];
        this.data.CurrentContract = contract;
        this.setAppTitle(this.selectedApplication, this.selectedContract);
    }

    deactivate() {
        
    }
}