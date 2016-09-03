const vetshack_carousel = () => {
  let directive = {
    scope: {
      signin: '&'
    },
    templateUrl: '../pages/vetshack.home/templates/carousel.html',
    restrict: 'E',
    controller: CarouselCtrl,
    controllerAs: 'vm'
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
    image: "http://www.backdrops.net/images/34%20Mottled%20Blue%208'%20x%2010'.jpg",
    text: ''
  },{
    id: 1,
    image: "http://www.backdrops.net/images/34%20Mottled%20Blue%208'%20x%2010'.jpg",
    text: ''
  },{
    id: 2,
    image: "http://www.backdrops.net/images/34%20Mottled%20Blue%208'%20x%2010'.jpg",
    text: ''
  }]
};

export default vetshack_carousel;
