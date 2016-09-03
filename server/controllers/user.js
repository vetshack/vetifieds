var ControllerPrototype = require('./controller.prototype');

module.exports = (function() {
  var controller = ControllerPrototype.create({
    path: '/users'
  });
  var router = controller.router;
  
  router.get('/', function(req, res) {
    res.send("we hit /users");
  });

  return controller;
})();