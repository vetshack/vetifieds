let user = require('./user'),
    auth = require('./auth'),
    mentor = require('./mentor'),
    jobs = require('./jobs'),
    discount = require('./discounts')

module.exports = (() => {
  let controllers = [
    user,
    auth,
    mentor,
    jobs,
    discount
  ];

  let router = {};
  controllers.forEach((controller) => {
    router[controller.path] = controller.router;
  });
  
  return router;
})();
