import {inject} from "aurelia-framework";
import {HttpClient} from "aurelia-http-client";

let baseAppUrl = "../api/Application";
//let baseAppUrl = "http://localhost/IntegrationTesting2/api/Application";

//let baseCOntractsUrl = "http://localhost/IntegrationTesting2/api/Contracts/2";
let baseContractsUrl = "../api/Contracts/";


@inject(HttpClient)
export class TestData {

    
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

    getApplications()
    {
        console.log("******** getting appications *****");
        var tstObj = [{ Id : 1, ApplicationName : "RS" }, { Id : 2, ApplicationName : "BW" }];

        var p1 = new Promise(function(resolve, reject) { 
            resolve(tstObj);
        });
        //return [{ Id = 1, ApplicationName = "RS" }, { Id = 2, ApplicationName = "BW" }];
        return p1;
       
        /*
        return this.http
            .get(baseAppUrl)
                      .then(response => {
                          return response.content;
                      });
                      */
    }

    getContracts(appId)
    {
        console.log("******** getting contracts *****");
        var url = baseContractsUrl + appId;
        console.log(url);
        return this.http
            .get(url)
                        .then(response => {
                            return response.content;
                        });
    }
}