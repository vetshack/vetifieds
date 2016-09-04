const MentorsController = function(Mentors, $state) {
  const vm = this;

  // const tester = (Mentors.fetchLocalMentors("SantaMonicaCA"));

  vm.mentors = [];

  vm.init = () => {
    Mentors.fetchLocalMentors("SantaMonicaCA")
      .then((data) => {
        console.log(data);
        vm.mentors = data.data;
      })
  }

  // vm.getMentors = Mentors.test;

  // vm.getFilters = Mentors.testFilter;

  vm.onClickMentor = (mentorId) => {
    console.log("Mentors ID: ", mentorId);
    // once routing is complete pass in mentorId
    // i.e.: /mentores/:mentorId
    $state.go('home');
  };

  vm.init()
};

MentorsController.$inject = ['Mentors', '$state'];

export default MentorsController;
