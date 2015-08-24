import {TestData} from "./testData";

export class TestsAdmin{
    changeApplication() {
        this.$parent.currentApplication = "BW";
        console.log("Current application is: " + this.$parent.currentApplication);
    }

    bind(bindingContext) {
        this.$parent = bindingContext;
    }
}