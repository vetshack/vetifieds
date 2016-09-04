const AuthController = function(Auth, $state, $cookies) {
  let vm = this;
  
  vm.signin = function(username, password) {
    Auth.login(username, password)
    .then((response) => {
      $cookies.put('jwt', response.data.token);
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

    Auth.logout(jwt);
  }

  vm.state = $state.current.name;
};

AuthController.$inject = ['Auth', '$state', '$cookies'];

export default AuthController;
