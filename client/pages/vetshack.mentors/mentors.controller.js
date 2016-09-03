const MentorsController = function(Mentors, $state) {
  const vm = this;

  vm.getMentors = Mentors.test;

  vm.onClickMentor = (e) => {
    console.log("Event: ", e);
    $state.go('home');
  };
};

MentorsController.$inject = ['Mentors', '$state'];

export default MentorsController;
