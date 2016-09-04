const vetshack_carousel = () => {
  let directive = {
    scope: {
      image: '='
    },
    templateUrl: '../pages/vetshack.home/templates/carousel.html',
    restrict: 'E',
    controller: CarouselCtrl,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
};

CarouselCtrl.$inject = [];

function CarouselCtrl() {
  let vm = this;
  vm.myInterval = 4000;
  vm.noWrapSlides = false;
  vm.active = 0;

  vm.slides = [{
    id: 0,
    image: vm.image[0],
    text: ''
  },{
    id: 1,
    image: vm.image[1],
    text: ''
  },{
    id: 2,
    image: vm.image[2],
    text: ''
  }]

};

export default vetshack_carousel;
