'use strict';

var angular = require('angular');

module.exports = angular.module('playbuzz.home', [
  require('angular-ui-router')
])

.config(require('./home.route'))
.controller('HomeCtrl', require('./home.ctrl'))

.name

;
