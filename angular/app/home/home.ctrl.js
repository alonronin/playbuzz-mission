'use strict';

module.exports = function ($scope, $log, $state, mediaService) {
  'ngInject';

  var self = this;
  this.providers = mediaService.providers();
  self.provider = self.providers[0];

};
