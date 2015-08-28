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

        this.Tests = [
         {
             TestRequestFileId: 1,
             InputJson : "{foo : 'b'}",
             TestNumber : "1", 
             TestFileDescription: 'test file description for test 1', 
             TestName: "test 1",
             EditInputJson : "{foo : 'b'}",
             ActualOutput : "n/a",
             OutputJson : "{foo:'success'}"
         }
        ];     

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