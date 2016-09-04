const JobsController = function(Jobs, $state) {
  const vm = this;

  vm.jobs = [];

  vm.init = () => {
    Jobs.fetchLocalJobs("SantaMonicaCA")
      .then((data) => {
        vm.jobs = data;
      });
  };

  vm.onClickJob = (jobId) => {
    $state.go('jobProfile', { jobId: jobId });
  };

  vm.init()
};

JobsController.$inject = ['Jobs', '$state'];

export default JobsController;
