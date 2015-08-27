import {inject} from "aurelia-framework";
import {TestData} from "../testData";


@inject(TestData)
export class TestsAdmin{

    constructor(testData) {
        this.applications = null;
        this.data = testData;        
    }

    changeApplication() {
        
    }
    
     

    activate(params, routeconfig) {
        this.showContracts = routeconfig.showContracts;

        this.showContracts(false);
        this.data.getApplications().then(apps => 
        {  console.log("*** In activate");
            this.applications = apps;
            var curapp = this.applications[0];
            this.selectedApplication = curapp.ApplicationName;
        }); 
    }

    deactivate() {
        this.showContracts(true);
    }
}