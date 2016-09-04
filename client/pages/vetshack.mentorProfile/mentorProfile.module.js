import MentorProfileController from './mentorProfile.controller';
import MentorProfileFactory from './mentorProfile.factory';

const vethacks_mentorProfile = angular.module('vetshack.mentorProfile', [])
  .controller('MentorProfileController', MentorProfileController)
  .factory('MentorProfile', MentorProfileFactory);

export default vethacks_mentorProfile;
