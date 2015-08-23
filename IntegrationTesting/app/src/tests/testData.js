import {inject} from "aurelia-framework";
import {HttpClient} from "aurelia-http-client";

let baseUrl = "/api/test";

@inject(HttpClient)
export class testData {

    constructor(httpClient) {
        this.http = httpClient;
    }

    getById(id) {
        return {id: id, TestName: "test 1"};

    }

    getAll() {
        return [{id: 1, TestName: "test 1"}, {id: 2, TestName: "test 2"}, {id: 3, TestName: "test 3"}];
        
    }

    save(test) {
        var request = this.http.createRequest();
        request.asPut()
               .withUrl(baseUrl)
               .withHeader("Accept", "application/json")
               .withHeader("Content-Type", "application/json")
               .withContent(test);

        return request.send().then(response => response.content); //lklkkk

    }

}