import {inject} from "aurelia-framework";
import {TestData} from "./testData";

inject(TestData)
export class TestsRunner
{
    Tests = [{id: 1, TestName: "test 1"}, {id: 2, TestName: "test 2"}, {id: 3, TestName: "test 3"}];
    constructor(testData) {        
        this.testData = testData;
        this.TestToRun = "*";
    }

    activate() {
        
    }
    
    showTests() {

    }
}