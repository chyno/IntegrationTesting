

let baseUrl = "/api/test";

//@inject(HttpClient)
export class testData {

    
    constructor(httpClient) {
        this.http = httpClient;
        this.CurrrentApplication = "RS";
        this.CurrrentContract = "Find Beneficiary";
    }

    getById(id) {
        return {id: id, TestName: "test 1"};

    }

    getAll() {
        return [{id: 1, TestName: "test 1"}, {id: 2, TestName: "test 2"}, {id: 3, TestName: "test 3"}];
        
    }

    save(test) {
         

    }

}