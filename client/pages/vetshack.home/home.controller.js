const HomeController = function(Home) {
  let vm = this;
  vm.loaded = false;
  vm.categories = [];
  vm.pictures = {};

  vm.mentorList = [{
    title: 'Receive on target guidance',
    text: 'Because they\'ve been down a similar path'
  }, {
    title: 'Forge a valuable connection',
    text: 'Build ongoing relationship with someone who understands how to readjust to civilian life.'
  }, {
    title: 'Rewinding expereience',
    text: 'Helping others develop, and succeed is invaluable.'
  }];

  vm.isActive = false;

  vm.toggleActive = () => {
    vm.isActive = !vm.isActive;
  }
  vm.init = () => {
    Home.getCata()
      .then((data) => {
        vm.categories = data;
        Home.getPic()
          .then((data) => {
            vm.pictures = data;
            vm.loaded = true;
          })
      })
  }

  vm.init();
};

HomeController.$inject = ['Home'];

export default HomeController;
