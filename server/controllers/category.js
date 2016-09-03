let ControllerPrototype = require('./controller.prototype.js'),
  authHelper = require('../helpers/authHelper'),
  db = require('../db/db');
  Q = require('q');

module.exports = (function() {
  let controller = ControllerPrototype.create({
    path: '/api/categories'
  });
  let router = controller.router;


  router.get('/', function(req, res) {

    res.json({ categories: db.modelNames() });

  });

  return controller;
})();