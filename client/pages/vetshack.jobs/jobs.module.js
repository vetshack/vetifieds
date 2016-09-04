import JobsController from './Jobs.controller';
import JobsFactory from './Jobs.factory';
import search_bar from '../../shared/components/shared.searchbar.component';

const vethacks_jobs = angular.module('vetshack.Jobs', [])
  .controller('JobsController', JobsController)
  .factory('Jobs', JobsFactory);

export default vethacks_jobs;
