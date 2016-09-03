const vetshack_signup = () => {
  let directive = {
    scope: {
      signup: '&'
    },
    templateUrl: '../pages/vetshack.auth/templates/signup.html',
    restrict: 'E',
    controller: SignupCtrl,
    controllerAs: 'vm'
  };

  return directive;
};

SignupCtrl.$inject = [];

function SignupCtrl() {
  let vm = this;
};

export default vetshack_signup;

