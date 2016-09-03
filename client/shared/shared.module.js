import search_bar from './components/shared.searchbar.component';

const vethacks_shared = angular.module('vetshack.shared', [])
  .directive('vetshackSearchbar', search_bar);

export default vethacks_shared;
