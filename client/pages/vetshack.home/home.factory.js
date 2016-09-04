const Home = function($http, $q) {
  const getCata = () => {
    return $http({
      method: 'GET',
      url: 'api/categories'
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log('Error from attempted login: ', err);
    });
  };

  const getPic = () => {
    return $http({
      method: 'GET',
      url: 'api/images'
    })
    .then((response) => {
      return response.data.data[0];
    })
    .catch((err) => {
      console.log('Error from attempted login: ', err);
    });
  };

  let service = {
    getCata: getCata,
    getPic: getPic
  };

  return service;
};

Home.$inject = ['$http', '$q'];

export default Home;
