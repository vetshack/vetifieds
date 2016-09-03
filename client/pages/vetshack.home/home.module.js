import HomeController from './home.controller';
import HomeFactory from './home.factory';

const vethacks_home = angular.module('vetshack.home', [])
  .controller('HomeController', HomeController)
  .factory('Home', HomeFactory);

export default vethacks_home;