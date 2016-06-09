'use strict';
require('./list.style.css')

var angular = require('angular');

module.exports = angular.module('playbuzz.media.flickr', [
  require('angular-resource')
])

.factory('flickrFactory', function($sce, flickrAPI){
  return {
    parse: function (url) {
      return url || false;
    },

    search: function (term) {
      return flickrAPI.search(term);
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

.service('flickrAPI', require('./flickr.resource'))

.name

;
