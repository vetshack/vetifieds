const vetshack_searchbar = () => {
  var directive = {
    scope: {
      location: '=',
      type: '='
    },
    templateUrl: '../shared/templates/searchbar.html',
    restrict: 'E',
    controller: SearchbarCtrl,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
};

SearchbarCtrl.$inject = [];

function SearchbarCtrl() {
  let vm = this;

}

export default vetshack_searchbar;
