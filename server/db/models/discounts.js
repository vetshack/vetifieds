let mongoose = require('mongoose');

let DiscountSchema = mongoose.Schema({
  location: String,
  type: String,
  description: String,
  amount: Number,
  who: String
});

module.exports = DiscountSchema;