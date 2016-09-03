import HomeController from './home.controller';
import HomeFactory from './home.factory';
import vetshackCarousel from './components/vetshack.carousel.component';

const vethacks_home = angular.module('vetshack.home', [])
  .controller('HomeController', HomeController)
  .factory('Home', HomeFactory)
  .directive('vetshackCarousel', vetshackCarousel);

export default vethacks_home;
