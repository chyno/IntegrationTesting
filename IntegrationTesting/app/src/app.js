import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
    currentApplication = 'RS';
  configureRouter(config, router){
    config.title = 'Contract Testing';
    config.map([
      { route: ['','tests-runner'],  name: 'tests-runner',      moduleId: 'tests/tests-runner',      nav: true, title:'Run Test' },
      { route: 'tests-manage',         name: 'tests-manage',        moduleId: 'tests/tests-manage',        nav: true, title:'Add Edit Tests' },
      { route: 'tests-documentation',  name: 'tests-documentation', moduleId: 'tests/tests-documentation', nav: true, title:'Documentation' },
      { route: 'tests-admin',  name: 'tests-admin', moduleId: 'tests/tests-admin', nav: true, title:'Admin' },
    ]);

    this.router = router;
  }
}
