module.exports = function($stateProvider){
  'ngInject';

  $stateProvider
    .state('main.home', {
      url: '/?provider',
      controller: 'HomeCtrl as home',
      template: require('./home.html')
    })

};
