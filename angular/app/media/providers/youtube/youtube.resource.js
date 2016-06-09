'use strict';

module.exports = function ($resource) {
  'ngInject';

  var key = 'AIzaSyB5FCd_ScwpwkF7i59UsALPwzG4UJpkJGU';
  var resource = $resource('https://www.googleapis.com/youtube/v3/search', {key: key});

  this.search = function (q) {
    return resource.get({q: q, part: 'snippet'}).$promise.then(function (data) {
      return data.items;
    });
  }
};
