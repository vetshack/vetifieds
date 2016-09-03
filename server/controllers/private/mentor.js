let ControllerPrototype = require('./../controller.prototype.js');
let authHelper = require('../../helpers/authHelper');
let Mentor = require('../../db/models/mentors');
let Q = require('q');


module.exports = (function() {
  let controller = ControllerPrototype.create({
    path: '/mentors'
  });
  let router = controller.router;

  router.get('/', function(req, res) {
    res.send("we hit /mentors");
  });
  
  router.post('/', function(req, res) {
    console.log('inside post', Mentor);

    // var postMentor = Q.nbind(User.findOne, User);
    // findUser({username: reqUser.username})
    //   .then(function (user) {
    //     if (!user) {
    //       next(new Error('User does not exist'));
    //     } else {
    //       return user.comparePasswords(reqUser.password)
    //         .then(function(foundUser) {
    //           console.log("foundUser", foundUser);
    //           if (foundUser) {
    //             var token = authHelper.generateToken(user)
    //             res.json({token: token, user:user});
    //           } else {
    //             res.status(400).json({msg:"No User found"})
    //           }
    //         });
    //     }
    //   })
    //   .fail(function (error) {
    //     console.log("failed, line in /signin")
    //     next(error);
    //   });
  });

  return controller;
})();