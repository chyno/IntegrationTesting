import {inject} from "aurelia-framework";
import {TestData} from "./testData";

inject(TestData)
export class TestsRunner
{
<<<<<<< HEAD
    
   

    constructor() {        
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
=======
    Tests = [{id: 1, TestName: "test 1"}, {id: 2, TestName: "test 2"}, {id: 3, TestName: "test 3"}];
    constructor(testData) {        
        this.testData = testData;
        this.TestToRun = "*";
>>>>>>> af2f07ce1464adfb86d1c8993f834dcaca78730c
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
<<<<<<< HEAD
=======
    
    showTests() {

    }
>>>>>>> af2f07ce1464adfb86d1c8993f834dcaca78730c
}