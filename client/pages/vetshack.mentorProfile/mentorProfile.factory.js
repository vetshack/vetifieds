const MentorProfile = function($http, $q, $state) {
  const service = {
    getMentorData: () => {
      let mentorId = $state.params.mentorId;
      return $http.get('/api/mentors/id/' + mentorId)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log('Error in getMentorData in mentorProfileFactory');
        return err;
      });
    }
  };

  return service;
};

MentorProfile.$inject = ['$http', '$q', '$state'];

export default MentorProfile;