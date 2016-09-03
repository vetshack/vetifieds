let ControllerPrototype = require('./controller.prototype');

module.exports = (function() {
  let controller = ControllerPrototype.create({
    path: 'api/jobs'
  });
  let router = controller.router;
  
  router.get('/', function(req, res) {
    res.send("we hit /jobs");
  });

  return controller;
})();