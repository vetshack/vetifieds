let ControllerPrototype = require('./controller.prototype.js'),
  authHelper = require('../helpers/authHelper'),
  Image = require('../db/models/images'),
  Q = require('q');

module.exports = (function() {
  let controller = ControllerPrototype.create({
    path: '/api/images'
  });
  let router = controller.router;

  router.get('/', function(req, res) {

    let getImages = Q.nbind(Image.find, Image);
    getImages({})
      .then(function(response) {
        res.json({ data: response });
      })
      .fail(function (error) {
        console.log("failed, line 20 in /api/images", error)
        next(error);
      });
  });

  router.post('/', function(req, res) {
    let postIcon = Q.nbind(Image.findOneAndUpdate, Image);
    if (req.body.type === "icon") {
      let tempObj = {};
      tempObj[req.body.name] = req.body.url;
      postIcon({},
        {$push: { "icons": JSON.stringify(tempObj) }},
        {upsert: true}
      )
      .then(function(response) {
        // console.log('after push', response);
        res.send({ success: true });
      })
    } else {
      postIcon({},
        {$push: {"imageUrls": req.body.url}}
      )
        .then(function(response) {
          res.send({ success: true });
        })
    }
  })

  return controller;
})();