const AuthController = function(Auth, $state, $cookies) {
  let vm = this;
  
  vm.signin = function(username, password) {
    console.log('username: ', username);
    console.log('password: ', password);
    Auth.login(username, password)
    .then((response) => {
      console.log(response);
      $cookies.put('jwt', response.token);
    })
  };

  vm.signup = function(email, fullName, username, password, isVet) {
    Auth.signup(email, fullName, username, password, isVet);
  };

  vm.state = $state.current.name;
};

AuthController.$inject = ['Auth', '$state', '$cookies'];

export default AuthController;
