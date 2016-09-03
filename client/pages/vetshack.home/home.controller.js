const HomeController = function(Home) {
  let vm = this;

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
};

HomeController.$inject = ['Home'];

export default HomeController;
