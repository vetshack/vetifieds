const vetshack_mentorProfileText = () => {
  let directive = {
    scope: {
      mentor: '='
    },
    templateUrl: '../pages/vetshack.mentorProfile/templates/mentorProfileText.html',
    restrict: 'E',
    controller: MentorProfileCtrl,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
};

MentorProfileCtrl.$inject = [];

function MentorProfileCtrl() {
  let vm = this;
  
};

export default vetshack_mentorProfileText;
