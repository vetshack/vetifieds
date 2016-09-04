import SOSController from './sos.controller';
import SOSFactory from './sos.factory';

const vethacks_sos = angular.module('vetshack.sos', ['ngMaterial'])
  .controller('SOSController', SOSController)
  .factory('SOS', SOSFactory);

export default vethacks_sos;
