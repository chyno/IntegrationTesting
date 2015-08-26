import {inject} from "aurelia-framework";
import {TestData} from "./testData";

inject(TestData)
export class TestsRunner
{
    
    constructor() {        
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
        this.ShowTests = false;
        this.TestToRun = "*";
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