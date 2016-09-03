const vethacks_config = angular.module('vetshack.config', [])
  .config(config);
  
/* @ngInject */

function config($stateProvider, $urlRouterProvider, $httpProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      auth: false,
      templateUrl: '../pages/vetshack.home/templates/home.html',
      controller: 'HomeController as vm'
    });
  $urlRouterProvider
    .otherwise('/home');
}

export default vethacks_config;