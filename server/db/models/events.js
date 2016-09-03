let mongoose = require('mongoose');

let EventSchema = mongoose.Schema({
  eventname: String,
  location: String,
  poc: String,
  phone: String,
  email: String,
  duration: Number,
  date: Date,
  description: String
});

module.exports = mongoose.model('Event', EventSchema);