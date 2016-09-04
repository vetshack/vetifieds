const MentorsController = function(Mentors, $state) {
  const vm = this;

  vm.mentors = [];

  vm.init = () => {
    Mentors.fetchLocalMentors("SantaMonicaCA")
      .then((data) => {
        vm.mentors = data.data;
      })
  };

  vm.onClickMentor = (mentorId) => {
    $state.go('mentorProfile', { mentorId: mentorId });
  };

  vm.init()
};

MentorsController.$inject = ['Mentors', '$state'];

export default MentorsController;
