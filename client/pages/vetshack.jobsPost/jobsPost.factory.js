const JobsPost = function($http, $q, data) {
  const post = (post) => {
    return $http({
      method: 'POST',
      url: 'api/jobs/',
      data: post
    })
    .then((resp) => {
      data = resp.data;
      return data;
    })
    .catch((err) => {
      console.log("Error in fetchLocalJobs in Jobs service");
      return err;
    });
  }

  const service = {
    post: post
  };

  return service;
};

JobsPost.$inject = ['$http', '$q'];

export default JobsPost;
