const mongoose = require('mongoose');

const vetVolunteersSchema = mongoose.Schema({
  name: String,
  location: Number,
  description: String,
  okToContact: Boolean,
  phone: String,
  email: String
});

module.exports = mongoose.model('VetVolunteer', vetVolunteersSchema);
