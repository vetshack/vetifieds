let mongoose = require('mongoose'),
  moment = require('moment');

require('dotenv').config();

let dbURL = 'mongodb://'+ process.env.DB_USER + ':' + process.env.DB_PASS + '@ds019876.mlab.com:19876/vetifieds'

let db = mongoose.connection;

mongoose.connect(dbURL);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('[' + moment().format('hh:mm:ss') + ']' + ' Database connection established');
});

module.exports = db;