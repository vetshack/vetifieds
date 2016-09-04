import EventsController from './Events.controller';
import EventsFactory from './Events.factory';
import search_bar from '../../shared/components/shared.searchbar.component';

const vethacks_events = angular.module('vetshack.events', [])
  .controller('EventsController', EventsController)
  .factory('Events', EventsFactory);

export default vethacks_events;
