const Discounts = function($http, $q, data) {

  const service = {
    fetchLocalDiscounts: (location) => {
      return $http({
        method: 'GET',
        url: 'api/discounts/' + location
      })
      .then((resp) => {
        data = resp.data;
        return data;
      })
      .catch((err) => {
        console.log("Error in fetchLocalDiscounts in Discounts service");
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

Discounts.$inject = ['$http', '$q'];

export default Discounts;
