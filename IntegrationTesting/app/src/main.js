export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-animator-css')
  .globalResources("resources/contracts");
  

  aurelia.start().then(a => a.setRoot());
}
