'use strict';

module.exports = function ($resource) {
  'ngInject';

  var key = 'b71a3b04c27210b61ce71dc633d515c8';
  var resource = $resource('https://api.flickr.com/services/rest/', {method: 'flickr.photos.search', api_key: key, per_page: 5, format: 'json', nojsoncallback: 1});

  this.search = function(q) {
    return resource.get({text: q}).$promise.then(function(data){
      return data && data.photos && data.photos.photo || [];
    });
  }
};
