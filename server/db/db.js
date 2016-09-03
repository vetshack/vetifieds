var mongoose = require('mongoose');
require('dotenv').config();

var dbURL = 'mongodb://'+ process.env.DB_USER + ':' + process.env.DB_PASS + '@ds019876.mlab.com:19876/vetifieds';
var db = mongoose.connection;

mongoose.connect(dbURL);

var UserSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  isVet: Boolean
});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to database!');
});