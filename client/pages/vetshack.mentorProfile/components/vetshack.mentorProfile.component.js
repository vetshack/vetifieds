const vetshack_mentorProfile = () => {
  let directive = {
    scope: {
      
    },
    templateUrl: '../pages/vetshack.auth/templates/mentorProfile.html',
    restrict: 'E',
    controller: MentorProfileCtrl,
    controllerAs: 'vm'
  };

  return directive;
};

MentorProfileCtrl.$inject = [];

function MentorProfileCtrl() {
  let vm = this;
};

export default vetshack_mentorProfile;
