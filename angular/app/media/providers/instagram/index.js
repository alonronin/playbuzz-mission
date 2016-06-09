'use strict';

var angular = require('angular');

module.exports = angular.module('playbuzz.media.instagram', [
  require('angular-resource')
])

.factory('instagramFactory', function($sce, youtubeAPI){
  return {
    parse: function (url) {
      return url || false;
    },

    search: function (term) {
      return instagramAPI.search(term);
    },

    templates: {
      embed: require('./embed.html'),
      list: require('./list.html')
    },

    features: {
      paste: false,
      search: true
    }
  }
})

.service('instagramAPI', require('./instagram.resource'))

.name

;
