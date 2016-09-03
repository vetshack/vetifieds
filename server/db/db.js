'use strict'

let mongoose = require('mongoose');
require('dotenv').config();

let dbURL = process.env.hosted === false 
            ?   'mongodb://'+ process.env.DB_USER + ':' + process.env.DB_PASS + '@ds019876.mlab.com:19876/vetifieds'
            : 'mongodb://localhost/vetifieds';

let db = mongoose.connection;

mongoose.connect(dbURL);

let UserSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  isVet: Boolean
});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to database!');
});