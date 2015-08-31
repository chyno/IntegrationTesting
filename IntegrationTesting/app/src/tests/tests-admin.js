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

        var app = this.getApplicationObject(this.selectedApplication);
        this.data.CurrentApplication = app;
        this.displayContracts();
    }
    
    activate(params, routeconfig) {
        this.setAppTitle = routeconfig.setAppTitle;
        this.data.getApplications().then(apps => {
            this.applications = apps;
            if (this.data.CurrentApplication) {
                this.selectedApplication = this.data.CurrentApplication.ApplicationName; 
            } else {
                this.data.CurrentApplication = apps[0];
                this.selectedApplication = apps[0].ApplicationName; 
            }

            this.displayContracts();
        });


    }

    displayContracts() {

        this.data.getContracts(this.data.CurrentApplication.Id).then(contracts => {
            this.contracts = contracts;

        }); 
    }

    selectContract() {
        this.data.setCurrentContract(this.selectedContract, this.contracts);
        this.setAppTitle(this.selectedApplication, this.selectedContract);
    }

    deactivate() {
        
    }

    getAplicationObject(appName) {
        return this.applications.filter((app) => { return app.ApplicationName === appName })[0];
    }
}