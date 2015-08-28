import {inject} from "aurelia-framework";
import {TestData} from "../testData";


@inject(TestData)
export class TestsAdmin{

    constructor(testData) {
        this.contracts = null;
        this.applications = null;
        this.data = testData;  
        this.selectedContract = null ;
    }

    changeApplication() {
        var app = this.applications.filter((app) => { return app.ApplicationName === this.selectedApplication })[0];
        this.data.CurrrentApplication = app;
        this.displayContracts(app.Id);
    }
    
    activate(params, routeconfig) {
        this.setAppTitle = routeconfig.setAppTitle;
        this.data.getApplications().then(apps => 
        {  console.log("*** In activate");
            this.applications = apps;
            var curapp;
            if (this.data.CurrrentApplication) {
                curapp = this.data.CurrrentApplication;
            } else {
                curapp = this.applications[0];    
            }
            
            this.selectedApplication = curapp.ApplicationName;

            this.displayContracts(curapp.Id);

        }); 
    }

    displayContracts(appId) {
        this.data.getContracts(appId).then(contracts => {this.contracts = contracts; }); 
    }

    selectContract() {
        this.setAppTitle(this.selectedApplication, this.selectedContract);
    }
    deactivate() {
        
    }
}