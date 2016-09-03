'use strict'

let user = require('./user');

module.exports = (() => {
  let controllers = [
    user
  ];

  let router = {};
  controllers.forEach((controller) => {
    router[controller.path] = controller.router;
  });
  
  return router;
})();
