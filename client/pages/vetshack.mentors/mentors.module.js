import MentorsController from './mentors.controller';
import MentorsFactory from './mentors.factory';
import search_bar from '../../shared/components/shared.searchbar.component';

console.log('search_bar: ', search_bar);
const vethacks_mentors = angular.module('vetshack.mentors', [])
  .controller('MentorsController', MentorsController)
  .factory('Mentors', MentorsFactory);

export default vethacks_mentors;
