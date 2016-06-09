'use strict';

var angular = require('angular');

module.exports = angular.module('playbuzz.media', [
  require('angular-sanitize'),
  require('./providers/youtube'),
  require('./providers/flickr')
])

.service('mediaService', require('./media.service'))
.directive('playbuzzMedia', require('./media.directive'))

.run(function (mediaService) {
  mediaService.register('youtube');
  mediaService.register('flickr');
})

.name

;
