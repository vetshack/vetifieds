var ControllerPrototype = require('./controller.prototype');
var authHelper = require('../helpers/authHelper');
var User = require('../db/models/users');
var Q = require('q');

module.exports = (function() {
  var controller = ControllerPrototype.create({
    path: '/api/auth'
  });
  var router = controller.router;
  
  router.post('/login', function(req, res) {
    req.assert('password', 'Password cannot be blank').notEmpty();

    var errors = req.validationErrors();

    if (errors) return res.status(400).send(errors);

    let reqUser = {
      username: req.body.username || "",
      email: req.body.email || "",
      password: req.body.password
    }
      
    var findUser = Q.nbind(User.findOne, User);
    findUser({
      $or: [{
          username: reqUser.username
      }, {
          email: reqUser.email
      }]
    })
      .then(function (user) {
        if (!user) {
          next(new Error('User does not exist'));
        } else {
          return user.comparePasswords(reqUser.password)
            .then(function(foundUser) {
              console.log("foundUser", foundUser);
              if (foundUser) {
                var token = authHelper.generateToken(user)
                res.json({token: token, user:user});
              } else {
                res.status(400).json({msg:"No User found"})
              }
            });
        }
      })
      .fail(function (error) {
        console.log("failed, line in /signin")
        next(error);
      });
  });

  router.post('/signup', function(req, res) {

    req.assert('username', 'Name cannot be blank').notEmpty();
    req.assert('email', 'Email is not valid').isEmail();
    req.assert('email', 'Email cannot be blank').notEmpty();
    req.assert('password', 'Password must be at least 4 characters long').len(4);
    req.sanitize('email').normalizeEmail({
      remove_dots: false
    });

    let errors = req.validationErrors();

    if (errors) return res.status(400).send(errors);

    let reqUser = {
      fullname: req.body.fullname,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      location: req.body.location,
      isVet: req.body.isVet
    }, 
      create, 
      newUser,
      findOne = Q.nbind(User.findOne, User);


    // check to see if user already exists
    findOne({
      $or: [{
          username: reqUser.username
      }, {
          email: reqUser.email
      }]
    })
      .then(function(user) {
        console.log("line 89", user)
        if (user) {
          res.status(400).json({msg:"User already exist!"})
        } else {
          // make a new user if not one
          create = Q.nbind(User.create, User);
          return create(reqUser);
        }
      })
      .then(function (user) {
        // create token to send back for auth
        console.log("created user");
        var token = authHelper.generateToken(user);
        res.json({token: token, user:user});
      })
      .fail(function (error) {
        console.log("fail in signup");
      });

  });

  return controller;
})();