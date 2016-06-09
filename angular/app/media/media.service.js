'use strict';

module.exports = function ($injector) {
  'ngInject';

  var providers = {};

  this.register = function (provider) {
    providers[provider] = provider + 'Factory'
  };

  this.provider = function(provider) {
    return $injector.get(providers[provider]);
  };

  this.providers = function(){
    return Object.keys(providers);
  }

};
