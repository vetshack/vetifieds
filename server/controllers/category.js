let ControllerPrototype = require('./controller.prototype.js'),
  authHelper = require('../helpers/authHelper'),
  Category = require('../db/models/categories'),
  db = require('../db/db'),
  async = require('async'),
  Q = require('q');

module.exports = (function() {
  let controller = ControllerPrototype.create({
    path: '/api/categories'
  });
  let router = controller.router;


  router.get('/', function(req, res) {

    let getCategories = Q.nbind(Category.find, Category);
    getCategories({})
      .then(function(response) {
        console.log('data from getcategories', response);
        let categories = [];
        async.eachSeries(response, function(category, callback) {
          console.log(category.category)
          categories.push(category.category);
          callback();
        }, function() {
          res.send(categories);
        })

      })

  });

  router.post('/', function(req, res) {

    let postCategory = Q.nbind(Category.create, Category);

    postCategory({
      category: req.body.category
    })
      .then(function(response) {
        res.json({ success: true });
      })


  });

  return controller;
})();