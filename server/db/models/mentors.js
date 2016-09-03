let mongoose = require('mongoose');

let MentorSchema = mongoose.Schema({
  type: String,
  fullname: String,
  imageUrl: String,
  location: Number,
  industry: String,
  unit: String,
  mos: String,
  phone: String,
  email: String
});

module.exports = MentorSchema;