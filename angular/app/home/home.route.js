module.exports = function($stateProvider){
  'ngInject';

  $stateProvider
    .state('main.home', {
      url: '/',
      controller: 'HomeCtrl as home',
      template: require('./home.html')
    })

};
