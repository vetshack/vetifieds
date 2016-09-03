let ControllerPrototype = require('./controller.prototype.js');
let authHelper = require('../helpers/authHelper');
let Event = require('../db/models/events');
let Q = require('q');

module.exports = (function() {
  let controller = ControllerPrototype.create({
    path: '/api/events'
  });
  let router = controller.router;

  router.get('/', function(req, res) {
    res.send('We hit /event');
  })

  router.get('/:location', function(req, res) {

    if (!authHelper.isAuthenticated()) return res.status(401).send('User unauthorized');

    let getEvents = Q.nbind(Event.find, Event);
    getEvents({
      location: req.params.location
    })
      .then(function(response) {
        res.json({ data: response });
      })
      .fail(function (error) {
        console.log("failed, line 28 in /events")
        next(error);
      });

  });

  router.post('/', function(req, res) {
    console.log('posting in events');

    if (!authHelper.isAuthenticated()) return res.status(401).send('User unauthorized');

    req.assert('eventname', 'Event name cannot be blank').notEmpty();

    let errors = req.validationErrors();

    if (errors) return res.status(400).send(errors);

    let postEvent = Q.nbind(Event.create, Event);
    postEvent({
      eventname: req.body.eventname,
      location: req.body.location,
      poc: req.body.poc,
      phone: req.body.phone,
      email: req.body.email,
      duration: req.body.duration,
      date: req.body.date,
      description: req.body.description
    })
      .then(function () {
        console.log('post event success');
        res.json({success: true});
      })
      .fail(function (error) {
        console.log("failed, line 48 in /events", error)
        next(error);
      });

  });

  return controller;
})();