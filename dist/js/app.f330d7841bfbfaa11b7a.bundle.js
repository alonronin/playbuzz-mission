webpackJsonp([1],[function(e,t,i){e.exports=i(37)},,,,,,,,,,,,,,,,,,,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){e.exports='<div class=row> <div class=col-md-2> <ul class="nav nav-pills nav-stacked"> <li ng-repeat="provider in home.providers track by $index" ng-class="{active: home.provider === provider}"><a href="" ng-click="home.provider = provider">{{provider}}</a></li> </ul> </div> <div class=col-md-10> <playbuzz-media provider=home.provider></playbuzz-media> </div> </div>'},function(e,t){e.exports='<nav class="navbar navbar-default" role=navigation> <div class=container> <a class=navbar-brand ui-sref=main.home>{{main.title}}</a> </div> </nav> <div class=container> <ui-view></ui-view> </div>'},function(e,t){e.exports='<div class=row> <div class=col-md-5> <div class=form-group ng-if=media.features.paste> <div class=input-group> <input type=text class=form-control placeholder="Paste URL" ng-model=media.url> <span class=input-group-addon> <span class="glyphicon glyphicon-paste"></span> </span> </div> </div> <div class=form-group ng-if=media.features.search> <div class=input-group> <input type=text class=form-control placeholder=Search ng-model=media.search ng-model-options="{ updateOn: \'default blur\', debounce: {\'default\': 500, blur: 0} }"> <span class=input-group-addon> <span class="glyphicon glyphicon-search"></span> </span> </div> </div> <div ng-include=media.list.template></div> </div> <div class=col-md-7> <div ng-include=media.embed.template></div> </div> </div>'},function(e,t){e.exports="<img ng-src={{media.embed.url}} class=img-responsive ng-if=media.embed.url>"},function(e,t){e.exports="<ul class=\"media-list flickr\"> <li class=media ng-repeat=\"item in media.list.items track by $index\" ng-click=\"media.url = 'https://farm'+ item.farm +'.staticflickr.com/'+ item.server +'/'+ item.id +'_'+ item.secret+'_h.jpg'\"> <div class=media-left> <img class=\"media-object img-thumbnail\" ng-src=https://farm{{item.farm}}.staticflickr.com/{{item.server}}/{{item.id}}_{{item.secret}}_s.jpg> </div> <div class=media-body> {{item.title}} </div> </li> </ul>"},function(e,t){e.exports='<div class="embed-responsive embed-responsive-16by9" ng-if=media.embed.url> <iframe class=embed-responsive-item ng-src={{media.embed.url}} allowfullscreen></iframe> </div>'},function(e,t){e.exports='<ul class="media-list youtube"> <li class=media ng-repeat="item in media.list.items track by $index" ng-click="media.url = \'https://youtu.be/\' + item.id.videoId"> <div class=media-left> <img class="media-object img-thumbnail" ng-src={{item.snippet.thumbnails.default.url}}> </div> <div class=media-body> {{item.snippet.title}} </div> </li> </ul>'},,function(e,t){"use strict";e.exports=["$scope","$log","$state","mediaService",function(e,t,i,r){"ngInject";var s=this;this.providers=r.providers(),s.provider=s.providers[0]}]},function(e,t,i){e.exports=["$stateProvider",function(e){"ngInject";e.state("main.home",{url:"/?provider",controller:"HomeCtrl as home",template:i(26)})}]},function(e,t,i){"use strict";var r=i(1);e.exports=r.module("playbuzz.home",[i(2)]).config(i(35)).controller("HomeCtrl",i(34)).name},function(e,t,i){"use strict";i(25);var r=i(1);r.module("playbuzz",[i(2),i(38),i(36),i(41)]).config(["$urlRouterProvider","$locationProvider",function(e,t){"ngInject";e.rule(function(e,t){var i=t.path(),r=i.toLowerCase();return i!=r?r:void 0}),e.otherwise("/"),t.html5Mode(!1)}])},function(e,t,i){"use strict";var r=i(1);e.exports=r.module("playbuzz.main",[i(2)]).config(i(40)).controller("MainCtrl",i(39)).name},function(e,t){e.exports=["$scope",function(e){"ngInject";this.title="Playbuzz - Media Provider"}]},function(e,t,i){e.exports=["$stateProvider",function(e){"ngInject";e.state("main",{"abstract":!0,url:"",controller:"MainCtrl as main",template:i(27)})}]},function(e,t,i){"use strict";var r=i(1);e.exports=r.module("playbuzz.media",[i(4),i(46),i(45)]).service("mediaService",i(43)).directive("playbuzzMedia",i(42)).run(["mediaService",function(e){e.register("youtube"),e.register("flickr")}]).name},function(e,t,i){"use strict";e.exports=function(){"ngInject";return{restrict:"E",scope:{provider:"="},bindToController:!0,controller:["$scope","$log","$templateCache","mediaService",function(e,t,i,r){var s=this,n=function(){var t=r.provider(this.provider);this.url="",this.features=t.features,this.embed={},this.list={},t.templates.embed&&(this.embed.template="./media-embed-"+this.provider,i.put(this.embed.template,t.templates.embed)),t.templates.list&&(this.list.template="./media-list-"+this.provider,i.put(this.list.template,t.templates.list)),e.$watch(function(){return s.url},function(e){s.embed.url=t.parse(e)}),e.$watch(function(){return s.search},function(e){t.search(e).then(function(e){s.list.items=e})})};e.$watch(function(){return s.provider},function(e){e&&n.call(s)})}],controllerAs:"media",template:i(28)}}},function(e,t){"use strict";e.exports=["$injector",function(e){"ngInject";var t={};this.register=function(e){t[e]=e+"Factory"},this.provider=function(i){return e.get(t[i])},this.providers=function(){return Object.keys(t)}}]},function(e,t){"use strict";e.exports=["$resource",function(e){"ngInject";var t="b71a3b04c27210b61ce71dc633d515c8",i=e("https://api.flickr.com/services/rest/",{method:"flickr.photos.search",api_key:t,per_page:5,format:"json",nojsoncallback:1});this.search=function(e){return i.get({text:e}).$promise.then(function(e){return e&&e.photos&&e.photos.photo||[]})}}]},function(e,t,i){"use strict";i(23);var r=i(1);e.exports=r.module("playbuzz.media.flickr",[i(3)]).factory("flickrFactory",["$sce","flickrAPI",function(e,t){return{parse:function(e){return e||!1},search:function(e){return t.search(e)},templates:{embed:i(29),list:i(30)},features:{paste:!1,search:!0}}}]).service("flickrAPI",i(44)).name},function(e,t,i){"use strict";i(24);var r=i(1);e.exports=r.module("playbuzz.media.youtube",[i(3)]).factory("youtubeFactory",["$sce","youtubeAPI",function(e,t){return{parse:function(t){var i=/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,r=t.match(i);return r&&11===r[7].length?e.trustAsResourceUrl("https://www.youtube.com/embed/"+r[7]):!1},search:function(e){return t.search(e)},templates:{embed:i(31),list:i(32)},features:{paste:!0,search:!0}}}]).service("youtubeAPI",i(47)).name},function(e,t){"use strict";e.exports=["$resource",function(e){"ngInject";var t="AIzaSyB5FCd_ScwpwkF7i59UsALPwzG4UJpkJGU",i=e("https://www.googleapis.com/youtube/v3/search",{key:t});this.search=function(e){return i.get({q:e,part:"snippet"}).$promise.then(function(e){return e.items})}}]}]);
//# sourceMappingURL=app.f330d7841bfbfaa11b7a.bundle.js.map