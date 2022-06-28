const { withModuleFederation } = require('@nrwl/angular/module-federation');
const config = require('./module-federation.config');
module.exports = withModuleFederation({
  ...config,
  remotes:[
    ['shop','http://localhost:4201'],
    ['cart','http://localhost:4202'],
    ['about','http://localhost:4203']
  ]
});
