const AuthController = function(Auth, $state) {
  let vm = this;
  
  vm.signin = function(username, password) {
    console.log('username: ', username);
    console.log('password: ', password);
    console.log($state.current.name);
  };

  vm.signup = function(email, fullName, username, password, isVet) {
    console.log($state.current.name);
  };

  vm.state = $state.current.name;
};

AuthController.$inject = ['Auth', '$state'];

export default AuthController;
