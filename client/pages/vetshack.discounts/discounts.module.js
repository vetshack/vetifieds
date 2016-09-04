import DiscountsController from './discounts.controller';
import DiscountsFactory from './discounts.factory';
import search_bar from '../../shared/components/shared.searchbar.component';

const vethacks_discounts = angular.module('vetshack.discounts', [])
  .controller('DiscountsController', DiscountsController)
  .factory('Discounts', DiscountsFactory);

export default vethacks_discounts;
