const EventsController = function(Events, $state) {
  const vm = this;

  vm.events = [];

  vm.init = () => {
    Events.fetchLocalEvents("SantaMonicaCA")
      .then((data) => {
        vm.events = data.data;
      });
  };

  vm.onClickEvent = (eventId) => {
    $state.go('eventProfile', { eventId: eventId });
  };

  vm.init()
};

EventsController.$inject = ['Events', '$state'];

export default EventsController;
