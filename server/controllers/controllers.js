let user = require('./user'),
    auth = require('./auth'),
    mentor = require('./mentor');

module.exports = (() => {
  let controllers = [
    user,
    auth,
    mentor
  ];

  let router = {};
  controllers.forEach((controller) => {
    router[controller.path] = controller.router;
  });
  
  return router;
})();
