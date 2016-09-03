let auth = require('./auth');

module.exports = (() => {
  let controllers = [
    auth
  ];

  let router = {};
  controllers.forEach((controller) => {
    router[controller.path] = controller.router;
  });
  
  return router;
})();
