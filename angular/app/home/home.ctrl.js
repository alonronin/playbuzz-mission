module.exports = function($scope, $log, mediaService){
  'ngInject';

  this.providers = mediaService.providers();
  this.provider = 'youtube';

};
