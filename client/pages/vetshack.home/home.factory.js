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

  let service = {
    getCata: getCata
  };

  return service;
};

Home.$inject = ['$http', '$q'];

export default Home;
