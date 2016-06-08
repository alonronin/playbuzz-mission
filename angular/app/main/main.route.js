module.exports = function($stateProvider){
  'ngInject';

  $stateProvider
    .state('main', {
      abstract: true,
      url: '',
      controller: 'MainCtrl as main',
      template: require('./main.html')
    })

};
