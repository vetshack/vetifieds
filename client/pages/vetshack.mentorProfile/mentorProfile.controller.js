const MentorProfileController = function(Auth, $state, $cookies) {
  let vm = this;

  vm.state = $state.current.name;
};

MentorProfileController.$inject = ['Auth', '$state', '$cookies'];

export default MentorProfileController;
