var ControllerPrototype = require('./controller.prototype');
var authHelper = require('../helpers/authHelper');

module.exports = (function() {
  var controller = ControllerPrototype.create({
    path: '/'
  });
  var router = controller.router;
  
  router.post('/login', function(req, res) {
    req.assert('email', 'Email is not valid').isEmail();
    req.assert('email', 'Email cannot be blank').notEmpty();
    req.assert('password', 'Password cannot be blank').notEmpty();
    req.sanitize('email').normalizeEmail({ remove_dots: false });

    var errors = req.validationErrors();

    if (errors) {
      return res.status(400).send(errors);
    }

    let user = {
      username: req.body.username || "",
      email: req.body.email || "",
      password: req.body.password
    }

    res.json(user);
    // res.send("we hit /login");
  });

  router.post('/signup', function(req, res) {

    req.assert('name', 'Name cannot be blank').notEmpty();
    req.assert('email', 'Email is not valid').isEmail();
    req.assert('email', 'Email cannot be blank').notEmpty();
    req.assert('password', 'Password must be at least 4 characters long').len(4);
    req.sanitize('email').normalizeEmail({
      remove_dots: false
    });

    let errors = req.validationErrors();

    if (errors) {
      return res.status(400).send(errors);
    }
    
    let user = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    }


    //create user

    //attach token

    res.send("we hit /signup");
  });

  return controller;
})();