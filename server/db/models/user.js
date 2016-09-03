'use strict'

let mongoose = require('mongoose');

let UserSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  isVet: Boolean
});

module.exports = UserSchema;