let ControllerPrototype = require('./controller.prototype'),
    VetV = require('../db/models/vetVolunteers'),
    Q = require('q');


module.exports = (function() {
  let controller = ControllerPrototype.create({
    path: '/api/vetVolunteer'
  });
  let router = controller.router;
  
  router.get('/:name', function(req, res) {
    let email = req.params.email,
        link = Q.nbind(VetV.find, VetV);

    link({email: email})
      .then(function(data) {
        console.log("data found", data);
        res.json(data);
      })
      .fail(function (error) {
        console.log("failed, getting vetVolunteer", error)
        next(error);
      });

  });

  router.post('/', function(req, res) {

    if (!authHelper.isAuthenticated()) return res.status(401).send('User unauthorized');

    req.assert('name', 'Name cannot be blank').notEmpty();

    let errors = req.validationErrors();

    if (errors) return res.status(400).send(errors);

    let postVetV = Q.nbind(VetV.create, VetV);
    postVetV({
      name: req.body.name,
      fullname: req.body.fullname,
      description: req.body.description,
      okToContact: req.body.okToContact,
      phone: req.body.phone,
      email: req.body.email
    })
      .then(function () {
        console.log('post successful');
        res.json({success: true});
      })
      .fail(function (error) {
        console.log("failed, line 45 in /vetVolunteer")
        next(error);
      });
  });

  return controller;
})();