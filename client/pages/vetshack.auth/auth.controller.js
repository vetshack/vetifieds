const AuthController = function(Auth, $state, $cookies) {
  let vm = this;

  vm.loggedIn = $cookies.get('jwt') || false;

  vm.signin = function(username, password) {
    Auth.login(username, password)
    .then((response) => {
      $cookies.put('jwt', response.data.token);
      vm.loggedIn = true;
      $state.go('home');
    });
  };

  vm.signup = function(email, fullName, username, password, isVet) {
    Auth.signup(email, fullName, username, password, isVet)
    .then((response) => {
      $cookies.put('jwt', response.data.token);
      $state.go('home');
    });
  };

  vm.logout = function() {
    const jwt = $cookies.get('jwt');
    if(!jwt) {
      return;
    }

    $cookies.remove('jwt');
    vm.loggedIn = false;
    $state.go('home');
  }

  vm.state = $state.current.name;
};

AuthController.$inject = ['Auth', '$state', '$cookies'];

export default AuthController;
