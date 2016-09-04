const JobsPostController = function(JobsPost, $state) {
  const vm = this;

  vm.post = {};
  vm.success = false;

  vm.submitForm = () => {
    console.log(vm.post);
    JobsPost.post(vm.post)
      .then((data) => {
        console.log(data);
        vm.success = true;
        vm.userForm.$setPristine();
        vm.userForm.$setUntouched();
        vm.post = {};
      })
  }

  vm.clear = () => {
    vm.userForm.$setPristine();
    vm.userForm.$setUntouched();
    vm.post = {};
  }
};

JobsPostController.$inject = ['JobsPost', '$state'];

export default JobsPostController;
