let ControllerPrototype = require('./controller.prototype');

module.exports = (function() {
  let controller = ControllerPrototype.create({
    path: '/users'
  });
  let router = controller.router;
  
  router.get('/', function(req, res) {
    res.send("we hit /users");
  });

  return controller;
})();