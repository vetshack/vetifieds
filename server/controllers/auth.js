var ControllerPrototype = require('./controller.prototype');

module.exports = (function() {
  var controller = ControllerPrototype.create({
    path: '/'
  });
  var router = controller.router;
  
  router.post('/login', function(req, res) {
    let params = {
      username: req.body.username || "",
      email: req.body.email || "",
      password: req.body.password
    }

    res.send("we hit /login");
  });

  router.post('/signup', function(req, res) {
    let params = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    }

    res.send("we hit /signup");
  });

  return controller;
})();