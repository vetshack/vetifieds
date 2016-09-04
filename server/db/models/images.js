const mongoose = require('mongoose');

const ImageSchema = mongoose.Schema({
  icons: [String],
  imageUrls: [String],
  static: [String]
});

module.exports = mongoose.model('Image', ImageSchema);