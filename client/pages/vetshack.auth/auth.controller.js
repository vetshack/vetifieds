const AuthController = function(Auth, $state, $cookies) {
  let vm = this;
  
  vm.signin = function(username, password) {
    console.log('username: ', username);
    console.log('password: ', password);
    Auth.login(username, password)
    .then((response) => {
      $cookies.put('jwt', response.data.token);
    });
  };

  vm.signup = function(email, fullName, username, password, isVet) {
    Auth.signup(email, fullName, username, password, isVet)
    .then((response) => {
      $cookies.put('jwt', response.data.token);
    })
  };

  vm.state = $state.current.name;
};

AuthController.$inject = ['Auth', '$state', '$cookies'];

export default AuthController;
