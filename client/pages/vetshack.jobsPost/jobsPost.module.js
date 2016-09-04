import JobsPostController from './jobsPost.controller';
import JobsPostFactory from './jobsPost.factory';

const vethacks_jobsPost = angular.module('vetshack.jobsPost', [])
  .controller('JobsPostController', JobsPostController)
  .factory('JobsPost', JobsPostFactory);

export default vethacks_jobsPost;
