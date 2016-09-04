const mongoose = require('mongoose');

const ImageSchema = mongoose.Schema({
  url: [String]
});

module.exports = mongoose.model('Image', ImageSchema);