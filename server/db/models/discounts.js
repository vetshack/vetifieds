let mongoose = require('mongoose');

let DiscountSchema = mongoose.Schema({
  location: Number,
  type: String,
  description: String,
  amount: Number,
  who: String
});

module.exports = DiscountSchema;