import {TestData} from "../../src/testData";

describe('the test data  module', () => {
    
    class HttpStub {
        fetch(url) {
            var response = this.itemStub;
            this.url = url;
            return new Promise((resolve) => {
                resolve({ json: () => response });
            })
        }
        configure(func){
        }
    }


    it('fails', () => {
        expect(1).toEqual(1);
    });

    it('is not null', () => {

        var http = new HttpStub(),
           tst = new TestData(http);

        expect(tst).toBeDefined();
    })
});
