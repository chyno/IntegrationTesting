import {inject} from "aurelia-framework";
import {TestData} from "../testData";

inject(TestData)
export class TestsRunner
{
    
    
    constructor(testData) {
        this.contractId = -1;
        this.appId = -1;
        this.data = testData;
        this.ShowTests = false;
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
            if (this.contractId != this.data.CurrentContract.Id && this.appId != this.data.CurrentApplication.Id) {
                this.ShowTests = false;
                this.TestToRun = "*";    

            }
        } else {
            this.ShowTests = false;
            this.TestToRun = "*";    
        }
        
    }

    deactivate() {
        if (this.contractId > 0) {
            this.contractId = this.data.CurrentContract.Id;
            this.appId = this.data.CurrentApplication.Id;
        }
    }
    showTests()
    {
        this.ShowTests = true;
       
    }


    hideTests()
    {
        this.ShowTests = false;
       
    }
 
}