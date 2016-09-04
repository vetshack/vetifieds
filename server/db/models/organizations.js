const mongoose = require('mongoose');

const OrganizationSchema = mongoose.Schema({
  type: String, //drop down: Private, Public, Volunteer
  name: String,
  location: Number,
  mission: String,
  description: String,
  website: String,
  phone: String,
  email: String
});

module.exports = mongoose.model('Organization', OrganizationSchema);