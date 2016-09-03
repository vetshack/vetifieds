let mongoose = require('mongoose');

let MeetupSchema = mongoose.Schema({
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

module.exports = MeetupSchema;