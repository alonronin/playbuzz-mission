'use strict';

module.exports = function () {
  'ngInject';

  return {
    restrict: 'E',
    scope: {
      provider: '='
    },
    bindToController: true,
    controller: function ($scope, $log, $templateCache, mediaService) {
      'ngInject';

      var self = this;
      var provider = mediaService.provider(this.provider);

      var template = './media-embed-' + this.provider;
      $templateCache.put(template, provider.template);

      this.url = '';
      this.template = template;

      $scope.$watch(function () {
        return self.url;
      }, function (url) {
        self.embed = provider.parse(url);
      });

      $scope.$watch(function () {
        return self.search;
      }, function (q) {
        provider.search(q).then(function(data) {
          self.items = data.items;
          $log.debug(self.items);
        })
      })
    },
    controllerAs: 'media',
    template: require('./media.element.html'),
    link: function (scope, element, attrs) {

    }
  }
};
