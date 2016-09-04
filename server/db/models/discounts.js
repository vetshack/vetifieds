const mongoose = require('mongoose');

const DiscountSchema = mongoose.Schema({
  location: String,
  type: String,
  description: String,
  amount: Number,
  who: String
});

module.exports = mongoose.model('Discount', DiscountSchema);