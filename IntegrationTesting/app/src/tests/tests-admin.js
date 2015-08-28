import {inject} from "aurelia-framework";
import {TestData} from "../testData";


@inject(TestData)
export class TestsAdmin{

    constructor(testData) {
         
        this.applications = null;
        this.data = testData;        
    }

    changeApplication() {
        var app = this.applications.filter((app) => { return app.ApplicationName === this.selectedApplication });
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
            var curapp = this.applications[1];
            this.selectedApplication = curapp.ApplicationName;
        }); 
    }

    deactivate() {
        this.showContracts(true);
    }
}