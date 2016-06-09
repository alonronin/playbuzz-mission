'use strict';

var angular = require('angular');

module.exports = angular.module('playbuzz.media.youtube', [
  require('angular-resource')
])


.factory('youtubeFactory', function($sce, youtubeAPI){
  return {
    parse: function (url) {
      var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
      var match = url.match(regExp);
      if ( match && match[7].length === 11 ) return  $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + match[7]);
      return false;
    },

    search: function (term) {
      return youtubeAPI.search(term);
    },

    template: require('./embed.html')
  }
})

.service('youtubeAPI', require('./youtube.resource'))

.name

;
