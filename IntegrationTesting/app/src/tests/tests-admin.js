import {inject} from "aurelia-framework";
import {TestData} from "../testData";


@inject(TestData)
export class TestsAdmin{

    constructor(testData) {
         
        this.applications = null;
        this.data = testData;        
    }

    changeApplication() {
        var app = this.applications.filter((app) => { return app.ApplicationName === this.selectedApplication })[0];
        this.data.CurrrentApplication = app;
        this.setAppTitle(this.selectedApplication);
    }
    
     

    activate(params, routeconfig) {
        this.showContracts = routeconfig.showContracts;
        this.setAppTitle = routeconfig.setAppTitle;

        this.showContracts(false);
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
        }); 
    }

    deactivate() {
        this.showContracts(true);
    }
}