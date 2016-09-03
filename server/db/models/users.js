let mongoose = require('mongoose');

let UserSchema = mongoose.Schema({
  fullname: String,
  username: String,
  email: String,
  password: String,
  isVet: Boolean
});

module.exports = UserSchema;