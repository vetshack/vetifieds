const vetshacks_run = angular
  .module('vetshack.run', [])
  .run(run);

/* @ngInject */

function run($rootScope, $cookies, $state, Auth) {
  $rootScope.$on('$stateChangeStart', (event, to) => {
    if(!to.auth) {
      return;
    }

    event.preventDefault();

    const jwt = $cookies.get('jwt');

    if(Auth.checkAuth(jwt)) {
      to.auth = false;
      $state.go('home');
    } else {
      if(to.name === 'login' || to.name === 'signup') {
        to.auth = false;
        $state.go(to.name);
      } else {
        $state.go('home');
      }
    }
  });
}

export default vetshacks_run;