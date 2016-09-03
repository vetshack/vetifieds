let ControllerPrototype = require('./controller.prototype'),
    Discount = require('../db/models/discounts'),
    Q = require('q');


module.exports = (function() {
  let controller = ControllerPrototype.create({
    path: '/api/discount'
  });
  let router = controller.router;
  
  router.get('/:location', function(req, res) {
    let location = req.params.location,
        link = Q.nbind(Discount.find, Discount);

    link({location: location})
      .then(function(data) {
        console.log("data found", data);
        res.json(data);
      })
      .fail(function (error) {
        console.log("failed, getting discount", error)
        next(error);
      });

  });

  router.post('/', function(req, res) {

    if (!authHelper.isAuthenticated()) return res.status(401).send('User unauthorized');

    req.assert('email', 'Email is not valid').isEmail();
    req.assert('email', 'Email cannot be blank').notEmpty();
    req.sanitize('email').normalizeEmail({ remove_dots: false });

    let errors = req.validationErrors();

    if (errors) return res.status(400).send(errors);

    let postDiscount = Q.nbind(Discount.create, Discount);
    postDiscount({
      location: req.body.location,
      type: req.body.type,
      description: req.body.description,
      amount: req.body.amount,
      who: req.body.who
    })
      .then(function () {
        console.log('discount created successful');
        res.json({success: true});
      })
      .fail(function (error) {
        console.log("failed, posting discount")
        next(error);
      });
  });
  return controller;
})();