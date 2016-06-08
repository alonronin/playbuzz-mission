'use strict';

var angular = require('angular');

module.exports = angular.module('playbuzz.main', [
  require('angular-ui-router')
])

.config(require('./main.route'))
.controller('MainCtrl', require('./main.ctrl'))
  
.name

;
