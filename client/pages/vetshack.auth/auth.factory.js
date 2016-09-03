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

  const signup = (email, fullName, username, password, isVet) => {
    return $http({
      method: 'POST',
      url: 'api/auth/signup',
      data: {
        email: email,
        fullName: fullName,
        username: username,
        password: password,
        isVet: isVet
      }
    })
    .then((response) => {
      console.log('Response from attempted login: ',response);
    })
    .catch((err) => {
      console.log('Error from attempted login: ', err);
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


// return $http({
//  method: 'METHOD',
//  url: 'URL'
// })
//  .then(NAMEComplete)
//  .catch(NAMEFailed);

// function NAMEComplete (response) {
//  return response;
// }

// function NAMEFailed (error) {
//  console.error('Failed for links: ', error);
//  return $q.reject(error);
// }