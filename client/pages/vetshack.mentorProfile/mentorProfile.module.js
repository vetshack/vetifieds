import MentorProfileController from './mentorProfile.controller';
import MentorProfileFactory from './mentorProfile.factory';
import mentorProfileText from './components/vetshack.mentorProfileText.component';

const vethacks_mentorProfile = angular.module('vetshack.mentorProfile', [])
  .controller('MentorProfileController', MentorProfileController)
  .factory('MentorProfile', MentorProfileFactory)
  .directive('mentorProfileText', mentorProfileText);

export default vethacks_mentorProfile;
