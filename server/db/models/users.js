let mongoose = require('mongoose'),
    bcrypt   = require('bcrypt'),
    Q        = require('q'),
    saltRounds  = 10,
    db = require('../db.js');


let UserSchema = mongoose.Schema({
  fullname: String,
  username: String,
  email: String,
  password: String,
  salt: String,
  location: String,
  isVet: Boolean,
  isSupport: Boolean
});

UserSchema.methods.comparePasswords = function (attempt) {
  let defer = Q.defer(),
      savedPassword = this.password;
  bcrypt.compare(attempt, savedPassword, function (err, isMatch) {
    if (err) defer.reject(err);
    else defer.resolve(isMatch);
    
  });
  return defer.promise;

};

UserSchema.pre('save', function (next) {
  let user = this;

  bcrypt.genSalt(saltRounds, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);

      user.password = hash;
      user.salt = salt;
      next();
    });
  });
});

module.exports = mongoose.model('User', UserSchema);
