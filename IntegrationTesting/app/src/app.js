import {inject} from "aurelia-framework";
import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import {TestData} from "./testData";

let appTitle = "Contract Testing";

@inject(TestData)
export class App {

    constructor(testData) {
        this.data = testData;
    }

    activate() {
        
    }

    configureRouter(config, router) {
        var self = this;
        self.config = config;
        self.router = router;
        

        config.map([
            { route: ['', 'tests-runner'], name: 'tests-runner', moduleId: 'tests/tests-runner', nav: true, title: 'Run Test' },
            { route: 'tests-manage', name: 'tests-manage', moduleId: 'tests/tests-manage', nav: true, title: 'Add Edit Tests' },
            { route: 'tests-documentation', name: 'tests-documentation', moduleId: 'tests/tests-documentation', nav: true, title: 'Documentation' },
            { route: 'tests-admin', name: 'tests-admin', moduleId: 'tests/tests-admin', nav: true, title: 'Admin', showContracts: (show) => { this.showContracts = show }, setAppTitle:  (appName, cntractName) => { this.router.title = appName + " - " + cntractName;} }
        ]);

        self.router .title =  "";
        
       
    }
    
    
    showContracts = true;

    
}





