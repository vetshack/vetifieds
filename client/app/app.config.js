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
    })
    .state('login', {
      url: '/login',
      auth: true,
      templateUrl: '../pages/vetshack.auth/templates/auth.html',
      controller: 'AuthController as vm'
    })
    .state('mentors', {
      url: '/mentors',
      auth: false,
      templateUrl: '../pages/vetshack.mentors/templates/mentors.html',
      controller: 'MentorsController as vm'
    })
    .state('mentorProfile', {
      url: '/mentorprofile/:mentorId',
      auth: false,
      templateUrl: '../pages/vetshack.mentorProfile/templates/mentorProfile.html',
      controller: 'MentorProfileController as vm'
    })
    .state('signup', {
      url: '/signup',
      auth: true,
      templateUrl: '../pages/vetshack.auth/templates/auth.html',
      controller: 'AuthController as vm'
    })
    .state('sos', {
      url: '/sos',
      auth: true,
      templateUrl: '../pages/vetshack.sos/templates/sosSupportRegister.html',
      controller: 'SosController as vm'
    })
    .state('distress', {
      url: '/distress',
      auth: true,
      templateUrl: '../pages/vetshack.sos/templates/sosSendDistress.html',
      controller: 'SosController as vm'
    });
  $urlRouterProvider
    .otherwise('/home');
}

export default vethacks_config;
