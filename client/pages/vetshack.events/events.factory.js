const Events = function($http, $q, data) {

  const service = {
    fetchLocalEvents: (location) => {
      return $http({
        method: 'GET',
        url: 'api/events/' + location
      })
      .then((resp) => {
          data = resp.data;
          return data;
      })
      .catch((err) => {
        console.log("Error in fetchLocalEvents in Events service");
        return err;
      });
    },
    testFilter: () => {
      const filters = [];
      if(data) {
        for(let i = 0; i < data.length; i++) {
          filters.push(data[i].type);
        }
        return filters;
      } else {
        return filters;
      }
    }
  };

  return service;
};

Events.$inject = ['$http', '$q'];

export default Events;
