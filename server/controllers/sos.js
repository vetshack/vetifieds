let ControllerPrototype = require('./controller.prototype.js'),
  authHelper = require('../helpers/authHelper'),
  User = require('../db/models/users'),
  db = require('../db/db');
  Q = require('q'),
  mailgun = require('mailgun-js')({apiKey: process.env.MAILGUN_KEY, domain: process.env.MAILGUN_DOMAIN}),
  async = require('async');

require('dotenv').config();

module.exports = (function() {
  let controller = ControllerPrototype.create({
    path: '/api/sos'
  });
  let router = controller.router;


  router.get('/:location/:email', function(req, res) {

    //if (!authHelper.isAuthenticated()) return res.status(401).send('User unauthorized');
    console.log('params:', req.params.location, req.params.email, req.query.message)
    let getSupports = Q.nbind(User.find, User);

    getSupports({
      location: req.params.location,
      isSupport: true
    })
      .then(function(response) {
        // res.json({ data: response });
        async.eachSeries(response, function(user, callback) {
         let data = {
            from: req.params.email,
            to: user.email,
            subject: user.fullname + ' has sent a distress!',
            text: req.query.message
          };

          mailgun.messages().send(data, function (error, body) {
            console.log('sent message', body);
            callback();
          });
        }, function() {
          res.send( {status: 200} );
        })
      })
      .fail(function (error) {
        console.log("failed, line 28 in /api/sos")
        next(error);
      });

  });

  router.post('/:userid', function(req, res) {

    let userid = req.params.userid,
      updateUser = Q.nbind(User.findByIdAndUpdate, User),
      findUser = Q.nbind(User.findById, User);


    findUser(userid)
      .then(function(data) {
        console.log("data found", data);
        if (data.isVet) {
          updateUser(userid,
            {isSupport: true},
            {safe: true, upsert: true, new : true}
          )
            .then(function() {
              console.log('success')
              res.json({ msg: 'Registered as support' });
            })
            .fail(function (error) {
              console.log("failed, line 40 in /api/sos register as support", error)
              next(error);
            });
        } else {
          return res.status(400).send('Not a veteran');
        }
      })
      .fail(function (error) {
        console.log("failed, getting user", error)
        next(error);
      });

  });

  return controller;
})();