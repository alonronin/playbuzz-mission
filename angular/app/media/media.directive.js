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

      var init = function () {
        var provider = mediaService.provider(this.provider);

        this.url = '';
        this.features = provider.features;

        this.embed = {};
        this.list = {};

        if (provider.templates.embed) {
          this.embed.template = './media-embed-' + this.provider;
          $templateCache.put(this.embed.template, provider.templates.embed);
        }

        if (provider.templates.list) {
          this.list.template = './media-list-' + this.provider;
          $templateCache.put(this.list.template, provider.templates.list);
        }

        $scope.$watch(function () {
          return self.url;
        }, function (url) {
          self.embed.url = provider.parse(url);
        });

        $scope.$watch(function () {
          return self.search;
        }, function (q) {
          provider.search(q).then(function (data) {
            self.list.items = data;
          })
        });
      };

      $scope.$watch(function () {
        return self.provider;
      }, function (p) {
        if (p)
          init.call(self);
      });

    },
    controllerAs: 'media',
    template: require('./media.element.html')
  }
};
