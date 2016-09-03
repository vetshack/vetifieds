let user = require('./user'),
    auth = require('./auth'),
    mentor = require('./mentor'),
    jobs = require('./jobs'),
    discount = require('./discounts'),
    event = require('./event'),
    category = require('./category');

module.exports = (() => {
  let controllers = [
    user,
    auth,
    mentor,
    job,
    discount,
    event,
    category
  ];

  let router = {};
  controllers.forEach((controller) => {
    router[controller.path] = controller.router;
  });
  
  return router;
})();
