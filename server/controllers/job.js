let ControllerPrototype = require('./controller.prototype'),
    Job = require('../db/models/jobs'),
    Q = require('q');


module.exports = (function() {
  let controller = ControllerPrototype.create({
    path: '/api/jobs'
  });
  let router = controller.router;
  
  router.get('/:location', function(req, res) {
    let location = req.params.location,
        link = Q.nbind(Job.find, Job);

    link({location: location})
      .then(function(data) {
        console.log("data found", data);
        res.json(data);
      })
      .fail(function (error) {
        console.log("failed, getting jobs", error)
        next(error);
      });

  });

  router.post('/', function(req, res) {

    // if (!authHelper.isAuthenticated()) return res.status(401).send('User unauthorized');

    req.assert('email', 'Email is not valid').isEmail();
    req.assert('email', 'Email cannot be blank').notEmpty();
    req.sanitize('email').normalizeEmail({ remove_dots: false });

    let errors = req.validationErrors();

    if (errors) return res.status(400).send(errors);

    let postJob = Q.nbind(Job.create, Job);
    postJob({
      jobname: req.body.jobname,
      industry: req.body.industry,
      poc: req.body.poc,
      description: req.body.description,
      phone: req.body.phone,
      email: req.body.email,
      website: req.body.website,
      mos: req.body.mos,
      skillsreq: req.body.skillsreq,
      location: req.body.location,
      zipcode: req.body.zipcode
    })
      .then(function () {
        console.log('job created successful');
        res.json({success: true});
      })
      .fail(function (error) {
        console.log("failed, posting job")
        next(error);
      });
  });
  return controller;
})();