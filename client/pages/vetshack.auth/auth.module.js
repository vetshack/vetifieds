import AuthController from './auth.controller';
import AuthFactory from './auth.factory';
import vetshackLogin from './components/vetshack.login.component';
import vetshackSignup from './components/vetshack.signup.component';

const vethacks_auth = angular.module('vetshack.auth', [])
  .controller('AuthController', AuthController)
  .factory('Auth', AuthFactory)
  .directive('vetshackLogin', vetshackLogin)
  .directive('vetshackSignup', vetshackSignup);

export default vethacks_auth;
