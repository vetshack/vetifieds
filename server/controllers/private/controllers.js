let user = require('./user');
let mentor = require('./mentor');

module.exports = (() => {
  let controllers = [
    user,
    mentor
  ];

  let router = {};
  controllers.forEach((controller) => {
    router[controller.path] = controller.router;
  });
  
  return router;
})();
