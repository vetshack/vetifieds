let mongoose = require('mongoose');

let GroupSchema = mongoose.Schema({
  groupname: String,
  location: String,
  phone: String,
  email: String,
  createdby: String,
  description: String,
  members: [String]
});

module.exports = mongoose.model('Group', GroupSchema);