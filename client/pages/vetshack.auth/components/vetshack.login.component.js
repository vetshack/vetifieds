const vetshack_login = () => {
  let directive = {
    scope: {
      signin: '&'
    },
    templateUrl: '../pages/vetshack.auth/templates/login.html',
    restrict: 'E',
    controller: LoginCtrl,
    controllerAs: 'vm'
  };

  return directive;
};

LoginCtrl.$inject = [];

function LoginCtrl() {
  let vm = this;
};

export default vetshack_login;
