import {inject} from "aurelia-framework";
import {TestData} from "./testData";

inject(TestData)
export class TestsRunner
{
    
   

    constructor() {        
        this.Tests = [
         {
             TestRequestFileId: 1,
             InputJson : "{foo : 'b'}",
             TestNumber : "1", 
             TestFileDescription: 'test file', 
             TestName: "test 1",
             EditInputJson : ""
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