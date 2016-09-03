let user = require('./user'),
    auth = require('./auth'),
    mentor = require('./mentor'),
    job = require('./job'),
    discount = require('./discount'),
    event = require('./event');

module.exports = (() => {
  let controllers = [
    user,
    auth,
    mentor,
    job,
    discount,
    event
  ];

  let router = {};
  controllers.forEach((controller) => {
    router[controller.path] = controller.router;
  });
  
  return router;
})();
