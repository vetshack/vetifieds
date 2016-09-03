import AuthController from './auth.controller';
import AuthFactory from './auth.factory';
import vetshackLogin from './components/vetshack.login.component';

const vethacks_auth = angular.module('vetshack.auth', [])
  .controller('AuthController', AuthController)
  .factory('Auth', AuthFactory)
  .directive('vetshackLogin', vetshackLogin);

export default vethacks_auth;
