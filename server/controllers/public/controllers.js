let auth = require('./auth');
let mentor = require('./mentor');

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
