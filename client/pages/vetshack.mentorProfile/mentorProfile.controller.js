const MentorProfileController = function(MentorProfile, $state) {
  let vm = this;

  const init = () => {
    MentorProfile.getMentorData()
    .then((resp) => {
      vm.mentor = resp.data[0];
    });
  }

  init();
};

MentorProfileController.$inject = ['MentorProfile', '$state'];

export default MentorProfileController;
