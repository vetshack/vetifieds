let ControllerPrototype = require('./controller.prototype.js');
let authHelper = require('../helpers/authHelper');
let Mentor = require('../db/models/mentors');
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

    if (!authHelper.isAuthenticated()) return res.status(401).send('User unauthorized');

    req.assert('email', 'Email is not valid').isEmail();
    req.assert('email', 'Email cannot be blank').notEmpty();
    req.sanitize('email').normalizeEmail({ remove_dots: false });

    let errors = req.validationErrors();

    if (errors) return res.status(400).send(errors);

    let postMentor = Q.nbind(Mentor.create, Mentor);
    postMentor({
      type: req.body.type,
      fullname: req.body.fullname,
      username: req.body.username,
      imageUrl: req.body.imageUrl,
      location: req.body.location,
      industry: req.body.industry,
      unit: req.body.unit,
      mos: req.body.mos,
      phone: req.body.phone,
      email: req.body.email
    })
      .then(function () {
        console.log('post successful');
        res.json({success: true});
      })
      .fail(function (error) {
        console.log("failed, line 45 in /mentor")
        next(error);
      });
  });

  return controller;
})();