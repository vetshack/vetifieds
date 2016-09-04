angular
  .module('vetshack')
  .run(run);

  function run($rootScope, $state, $cookies, Auth) {
    $rootScope.$on('$stateChangeStart', (event, to) => {
      if(!to.auth) {
        return;
      }

      event.preventDefault();

      const jwt = $cookies.get('jwt');
      
      Auth.checkAuth(jwt);
    })
  }