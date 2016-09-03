let ControllerPrototype = require('./controller.prototype'),
    User = require('../db/models/users'),
    Q = require('q');


module.exports = (function() {
  let controller = ControllerPrototype.create({
    path: '/api/users'
  });
  let router = controller.router;
  
  router.get('/:email', function(req, res) {
    let email = req.params.email,
        link = Q.nbind(User.find, User);

    link({email: email})
      .then(function(data) {
        console.log("data found", data);
        res.json(data);
      })
      .fail(function (error) {
        console.log("failed, getting user", error)
        next(error);
      });

  });

  return controller;
})();