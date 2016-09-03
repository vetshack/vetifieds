let mongoose = require('mongoose');

let MentorSchema = mongoose.Schema({
  type: String,
  fullname: String,
  username: String,
  imageUrl: String,
  location: String,
  industry: String,
  unit: String,
  mos: String,
  phone: String,
  email: String
});

module.exports = mongoose.model('Mentor', MentorSchema);