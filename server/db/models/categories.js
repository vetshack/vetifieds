let mongoose = require('mongoose');

let CategorySchema = mongoose.Schema({
  category: String
});

module.exports = mongoose.model('Category', CategorySchema);