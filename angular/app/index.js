'use strict';

require('bootstrap.css');

var angular = require('angular');

angular.module('playbuzz', [
  require('angular-ui-router'),
  require('./main'),
  require('./home'),
  require('./media')
])

.config(function ($urlRouterProvider, $locationProvider) {
  'ngInject';

  $urlRouterProvider.rule(function ($i, $location) {
    var path = $location.path();
    var normalized = path.toLowerCase();
    if (path != normalized) return normalized;
  });

  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode(false);
})

;
