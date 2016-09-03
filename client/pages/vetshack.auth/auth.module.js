import AuthController from './auth.controller';
import AuthFactory from './auth.factory';

const vethacks_auth = angular.module('vetshack.auth', [])
  .controller('AuthController', AuthController)
  .factory('Auth', AuthFactory);

export default vethacks_auth;