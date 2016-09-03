const Auth = function($http, $q) {
  const login = (username, password) => {
    return $http({
      method: 'POST',
      url: 'api/auth/login',
      data: {
        username: username,
        password: password
      }
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log('Error from attempted login: ', err);
    });
  };

  const signup = (email, fullname, username, password, isVet) => {
    return $http({
      method: 'POST',
      url: 'api/auth/signup',
      data: {
        email: email,
        fullname: fullname,
        username: username,
        password: password,
        isVet: isVet
      }
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log('Error from attempted signup: ', err);
    });
  };

  const service = {
    login: login,
    signup: signup
  };

  return service;
};

Auth.$inject = ['$http', '$q'];

export default Auth;