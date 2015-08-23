import {TestData} from "./testData";

inject(TestData)
export class TestsRunner
{
    constructor(testData) {        
        this.testData = testData;
    }

    activate() {
        this.tests = this.movieData.getAll( );           
    }
    
}