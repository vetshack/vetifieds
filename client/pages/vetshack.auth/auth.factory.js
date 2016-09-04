const Auth = function($http, $q, $rootScope, $cookies) {
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

  const parseJwt = (jwt) => {
    const base64Url = jwt.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  };

  const checkAuth = (jwt) => {
    if(jwt) {
      const params = parseJwt(jwt);
      return Math.round(new Date().getTime() / 1000) <= params.exp;
    } else {
      console.log('No jwt found');
      return false;
    }
  };

  const logout = (jwt) => {
    $cookies.remove('jwt');
    $state.go('home');
  };

  const service = {
    login: login,
    signup: signup,
    checkAuth: checkAuth,
    logout: logout
  };

  return service;
};

Auth.$inject = ['$http', '$q', '$cookies', '$rootScope'];

export default Auth;
