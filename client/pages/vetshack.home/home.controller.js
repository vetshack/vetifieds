const HomeController = function(Home) {
  let vm = this;

  vm.categories = [];

  vm.mentorList = [{
    title: 'Receive on target guidance',
    text: '...because they\'ve been down a similar path'
  }, {
    title: 'Forge a valuable connection',
    text: '...because they\'ve been down a similar path'
  }, {
    title: 'Receive on target guidance',
    text: '...because they\'ve been down a similar path'
  }];

  vm.init = () => {
    Home.getCata()
      .then((data) => {
        console.log(data);
        vm.categories = data.categories;
      })
  }

  vm.init();
};

HomeController.$inject = ['Home'];

export default HomeController;
