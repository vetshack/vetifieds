const Jobs = function($http, $q, data) {

  const service = {
    fetchLocalJobs: (location) => {
      return $http({
        method: 'GET',
        url: 'api/jobs/' + location
      })
      .then((resp) => {
          data = resp.data;
          return data;
      })
      .catch((err) => {
        console.log("Error in fetchLocalJobs in Jobs service");
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

Jobs.$inject = ['$http', '$q'];

export default Jobs;
