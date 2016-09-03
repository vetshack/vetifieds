const AuthController = function(Auth) {
  let vm = this;
  
  vm.signin = function(username, password) {
    console.log('username: ', username);
    console.log('password: ', password);
  };
};

AuthController.$inject = ['Auth'];

export default AuthController;
