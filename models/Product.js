const mongoose = require('mongoose');

const Product = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  availability: {
    type: Boolean,
    required: true,
  },
  img: {
    type: Array,
    required: true,
  },
  original_cost: {
    type: Number,
    required: false,
  },
  rating: {
    type: Number,
    required: false,
  },
  product_type: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Product', Product);
