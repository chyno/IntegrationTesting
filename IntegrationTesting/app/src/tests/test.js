import {inject} from "aurelia-framework";
import {TestData} from "./testData";

@inject(TestData)
export class Test
{

    constructor(testData) {
        this.ShowTestResults = false;
        this.model = null;
        this.data = testData;
        this.ActualOutput = null;
        
    }
    

    activate (model) {
        
        this.model = model;
    }
    saveTest() {
    }

    runTest() {
        this.ShowTestResults = true;
        
        this.data.runTest(model).then((result) => {
            this.ActualOutput = result;
        });
    }

    refreshTest() {
        this.ShowTestResults = false;
    }

    saveTest() {

        this.ShowTestResults = true;
        this.data.saveTest(model).then((result) => {
            this.ShowTestResults = false;
        });

    }

}