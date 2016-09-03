let ControllerPrototype = require('./controller.prototype.js'),
  authHelper = require('../helpers/authHelper'),
  Group = require('../db/models/groups'),
  Q = require('q');

module.exports = (function() {
  let controller = ControllerPrototype.create({
    path: '/api/groups'
  });
  let router = controller.router;

  router.get('/', function(req, res) {
    res.send('We hit /groups');
  })

  router.get('/:location', function(req, res) {

    if (!authHelper.isAuthenticated()) return res.status(401).send('User unauthorized');

    let getGroups = Q.nbind(Group.find, Group);
    getGroups({
      location: req.params.location
    })
      .then(function(response) {
        res.json({ data: response });
      })
      .fail(function (error) {
        console.log("failed, line 28 in /api/groups")
        next(error);
      });

  });

  router.post('/', function(req, res) {

    if (!authHelper.isAuthenticated()) return res.status(401).send('User unauthorized');

    req.assert('groupname', 'Group name cannot be blank').notEmpty();
    req.assert('email', 'Email cannot be blank').notEmpty();
    req.assert('email', 'Email is not valid').isEmail();

    let errors = req.validationErrors();

    if (errors) return res.status(400).send(errors);


    let postGroup = Q.nbind(Group.create, Group);
    postGroup({
      groupname: req.body.groupname,
      location: req.body.location,
      phone: req.body.phone,
      email: req.body.email,
      createdby: req.body.createdby,
      description: req.body.description
    })
      .then(function (response) {
        console.log('post event success', response);
        let groupid = response._id,
          updateMember = Q.nbind(Group.findByIdAndUpdate, Group);

        updateMember(groupid,
          {$push: { "members": req.body.createdby }},
          {safe: true, upsert: true, new : true}
        )
        .then(function() {
          res.json({ success: true });
        })
        .fail(function (error) {
          console.log("failed, line 69 in /api/groups", error)
          next(error);
        });
    });

  });

  router.put('/:id', function(req, res) {

    if (!authHelper.isAuthenticated()) return res.status(401).send('User unauthorized');

    req.assert('User', 'User cannot be blank').notEmpty();
    let errors = req.validationErrors();

    if (errors) return res.status(400).send(errors);

    let groupid = req.params.id,
      updateMember = Q.nbind(Group.findByIdAndUpdate, Group);

    updateMember(groupid,
      {$push: { "members": req.body.user }},
      {safe: true, upsert: false, new : true}
    )
      .then(function() {
        res.json({ success: true });
      })
      .fail(function (error) {
        console.log("failed, line 91 in /api/groups to update members", error)
        next(error);
      });
  })

  return controller;
})();