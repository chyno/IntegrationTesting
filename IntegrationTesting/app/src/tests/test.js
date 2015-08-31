import {inject} from "aurelia-framework";
import {TestData} from "../testData";

@inject(TestData)
export class Test
{

   
    constructor(testData) {
        this.data = testData;
        this.ShowTestResults = false;
        this.model = null;
        this.ActualOutput = null;
    }

    activate (model) {
        
        this.model = model;
    }
    saveTest() {
    }

    runTest() {

        this.data.runTest(this.model).then( result => {
            this.ShowTestResults = true;
            this.ActualOutput = result;
        });
    }

    refreshTest() {
        this.ShowTestResults = false;
    }

}