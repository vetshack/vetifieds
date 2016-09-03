const Mentors = function($http, $q) {
  const url = 'localhost:1337/#/';

  const service = {
    
    fetchLocalMentors: (location) => {
      return $http({
        method: 'GET',
        url: url + '/mentor/' + location
      })
      .then((resp, err) => {
        if(err) {
          console.log(err);
        } else {
          return resp.data;
        }
      })
      .catch((err) => {
        console.log("Error in fetchLocalMentors in mentors service");
      })
    },
    test: () => {
      const mentors = [{
        name:'Ryan',
        type: 'Vet',
        Description: 'Taco'
      },
      {
        name:'Ryan',
        type: 'Vet',
        Description: 'Taco'
      }
      ];
      return mentors;
    }
  };

  return service;
};

Mentors.$inject = ['$http', '$q'];

export default Mentors;
