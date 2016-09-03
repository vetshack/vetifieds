let mongoose = require('mongoose');

let JobSchema = mongoose.Schema({
  jobname: String,
  industry: String,
  poc: String,
  description: String,
  phone: String,
  email: String,
  website: String,
  skillsreq: [String],
  city: String,
  state: String
});

module.exports = JobSchema;