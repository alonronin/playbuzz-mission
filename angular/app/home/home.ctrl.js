'use strict';

module.exports = function ($scope, $log, $state, mediaService) {
  'ngInject';

  var self = this;
  this.providers = mediaService.providers();

  $scope.$on('$stateChangeSuccess', function (e, state) {
    if (state.name === 'main.home')
      $state.go('main.home.provider', {provider: self.providers[0]})
  })

};
