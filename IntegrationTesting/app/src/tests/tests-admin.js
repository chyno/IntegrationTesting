import {inject} from "aurelia-framework";
import {TestData} from "../testData";


@inject(TestData)
export class TestsAdmin{

    constructor(testData) {
        this.contracts = null;
        this.applications = null;
        this.data = testData;  
        this.selectedContract = null ;
        this.applications = this.data.Applications;

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
        this.data.setCurrentContract(this.selectedContract, this.contracts);
        this.setAppTitle(this.selectedApplication, this.selectedContract);
    }

    deactivate() {
        
    }
}