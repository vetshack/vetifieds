let user = require('./user'),
    auth = require('./auth'),
    mentor = require('./mentor'),
    jobs = require('./job'),
    discount = require('./discount'),
    event = require('./event'),
    category = require('./category'),
    image = require('./image'),
    group = require('./group'),
    sos = require('./sos');

module.exports = (() => {
  let controllers = [
    user,
    auth,
    mentor,
    jobs,
    discount,
    event,
    category,
    image,
    group,
    sos
  ];

  let router = {};
  controllers.forEach((controller) => {
    router[controller.path] = controller.router;
  });
  
  return router;
})();
