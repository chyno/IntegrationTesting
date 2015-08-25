export class Test
{

   
    constructor() {
        this.ShowTestResults = false;
        this.model = null;
    }

    activate (model) {
        
        this.model = model;
    }
    saveTest() {
    }

    runTest() {
        this.ShowTestResults = true;
    }

    refreshTest() {
        this.ShowTestResults = false;
    }

}