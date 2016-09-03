let user = require('./user'),
    auth = require('./auth'),
    mentor = require('./mentor'),
    jobs = require('./jobs'),
    discount = require('./discounts'),
    event = require('./event');

module.exports = (() => {
  let controllers = [
    user,
    auth,
    mentor,
    jobs,
    discount,
    event
  ];

  let router = {};
  controllers.forEach((controller) => {
    router[controller.path] = controller.router;
  });
  
  return router;
})();
