let mongoose = require('mongoose');

let ImageSchema = mongoose.Schema({
  url: [String]
});

module.exports = mongoose.model('Image', ImageSchema);