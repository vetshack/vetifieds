let mongoose = require('mongoose');

let GroupSchema = mongoose.Schema({
  name: String,
  location: String,
  phone: String,
  createdby: String,
  time: Date,
  duration: Number,
  date: Date,
  description: String
  members: [String]
});

module.exports = mongoose.model('Group', GroupSchema);