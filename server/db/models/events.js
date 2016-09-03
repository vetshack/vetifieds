let mongoose = require('mongoose');

let EventSchema = mongoose.Schema({
  eventname: String,
  location: Number,
  poc: String,
  phone: String,
  email: String,
  time: Date,
  duration: Number,
  date: Date,
  description: String
});

module.exports = EventSchema;