import {inject} from "aurelia-framework";
import {TestData} from "../testData";

@inject(TestData)
export class TestsRunner
{
    constructor(testData) {
      
        this.data = testData;
        this.ShowTests = false;
        this.ShowSelector = false;
        this.TestToRun = "*";
        this.Tests = [];


    }

    activate()
    {
        if (this.data.CurrentContract) {
            
            if (this.data.needsRefresh()) {
                this.ShowSelector = true;
                this.ShowTests = false;
                this.TestToRun = "*";    

            } else {
                this.ShowSelector = true;
                this.ShowTests = true;
                this.TestToRun = "*";   
            }
        } else {
            this.ShowSelector = false;
            this.ShowTests = false;
            this.TestToRun = "*";    
        }
        
    }

    deactivate() {
        this.data.setCurrentState();
    }
    showTests() {

        this.data.getContractTests(this.TestToRun).then(tests => {
            this.Tests = tests;
        });

        this.ShowTests = true;
       
    }


    hideTests()
    {
        this.ShowTests = false;
       
    }
 
}