const DiscountsController = function(Discounts, $state) {
  const vm = this;

  vm.discounts = [];

  vm.init = () => {
    Discounts.fetchLocalDiscounts("SantaMonicaCA")
      .then((data) => {
        console.log('our discounts have discounts', data);
        vm.discounts = data;
      });
  };

  vm.onClickDiscount = (discountId) => {
    $state.go('discountProfile', { discountId: discountId });
  };

  vm.init()
};

DiscountsController.$inject = ['Discounts', '$state'];

export default DiscountsController;
