module.exports = function ($stateProvider) {
  'ngInject';

  $stateProvider
    .state('main.home', {
      url: '/',
      controller: 'HomeCtrl as home',
      template: require('./home.html')
    })

    .state('main.home.provider', {
      url: ':provider',
      controller: function($state, $log){
        this.provider = $state.params.provider;
      },
      controllerAs: 'vm',
      template: '<playbuzz-media provider="vm.provider"></playbuzz-media>'
    })
};
