const HomeController = function(Home, $mdDialog, $mdMedia, SOS, $cookies) {
  let vm = this;
  vm.loaded = false;
  vm.categories = [];
  vm.pictures = {};
  vm.vetIcon = '';
  vm.mentorList = [{
    title: 'Receive on target guidance',
    text: 'Because they\'ve been down a similar path'
  }, {
    title: 'Forge a valuable connection',
    text: 'Build ongoing relationship with someone who understands how to readjust to civilian life.'
  }, {
    title: 'Rewinding expereience',
    text: 'Helping others develop, and succeed is invaluable.'
  }];

  vm.isActive = false;

  vm.toggleActive = () => {
    vm.isActive = !vm.isActive;
  };

  vm.init = () => {
    Home.getCata()
      .then((data) => {
        vm.categories = data.map((name) => {
          if(name === "Discounts & Deals") {
            return {
              title: name,
              route: 'discounts',
              post: 'discounts' + 'Post'
            }
          }

          return {
            title: name,
            route: name.toLowerCase(),
            post: name.toLowerCase() + 'Post'
          }
        });

        Home.getPic()
          .then((data) => {
            vm.pictures = data;
            let icon = {};
            vm.pictures.icons.map((image, key) => {
              var image = JSON.parse(image);
              if ('vetgiveback' in image) {
                vm.vetIcon = image['vetgiveback'];
              }
              for (var key in image) {
                icon[key] = image[key];
              }
            });

            vm.pictures.icons = icon;
            vm.loaded = true;
          });
      });
  };

  vm.confirmSupport = (ev) => {
    console.log('inside confirm support');
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && vm.customFullscreen;
    $mdDialog.show({
      controller: SoScontroller,
      templateUrl: '../pages/vetshack.home/templates/modal.html',
      parent: angular.element(document.querySelector('#popup')),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    })
      .then(function(answer) {
        console.log('answer please', answer);
        vm.status = 'You said the information was "' + answer + '".';
      }, function() {
        vm.status = 'You cancelled the dialog.';
      });
  };

  vm.denySupport = (ev) => {
    console.log('inside deny support');
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && vm.customFullscreen;
    $mdDialog.show({
      controller: SoScontroller,
      templateUrl: '../pages/vetshack.home/templates/rejectModal.html',
      parent: angular.element(document.querySelector('#popupreject')),
      // targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    })
      .then(function(answer) {
        console.log('answer please', answer);
        vm.status = 'You said the information was "' + answer + '".';
      }, function() {
        vm.status = 'You cancelled the dialog.';
      });
  };

  vm.sendDistress = (ev) => {
    console.log('inside send distress');
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && vm.customFullscreen;
    console.log("moving forward now")
    $mdDialog.show({
      controller: SoScontroller,
      templateUrl: '../pages/vetshack.home/templates/distress.html',
      parent: angular.element(document.querySelector('#popupdistress')),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    })
      .then(function(answer) {
        console.log('answer please', answer);
        vm.status = 'You said the information was "' + answer + '".';
      }, function() {
        vm.status = 'You cancelled the dialog.';
      });
  };
  /* @ngInject */

  function SoScontroller($mdDialog, $scope, SOS, $cookies) {
    $scope.hide = function() {
      console.log("snake hide")
      $mdDialog.hide();
    };
    $scope.cancel = function() {
      console.log("snake cancel")
      $mdDialog.cancel();
    };
    $scope.answer = function(answer) {
      console.log('inside answer snake', SOS);
      SOS.regAsSupport()
        .then(function(response) {
          console.log(response);
          if (response.status === 400) {
            $mdDialog.hide(answer);
            vm.denySupport();
          }
          $scope.hide();
        });
    };

    $scope.answerd = function(answer) {
      console.log('inside distress all cap', answer, SOS)
      SOS.sendDistressMsg(answer, $cookies.get('email'), $cookies.get('location'))
        .then(function(response) {
          $mdDialog.hide(answer);
        });
    };
  }





  vm.init();
};

HomeController.$inject = ['Home', '$mdDialog', '$mdMedia', '$cookies', 'SOS'];

export default HomeController;
