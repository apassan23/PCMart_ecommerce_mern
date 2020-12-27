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
  discount: {
    type: Number,
    required: false,
    default: Math.round(Math.random() * 10000),
  },
  rating: {
    type: Number,
    required: false,
    default: Math.round((4 + Math.random()) * 10) / 10,
  },
  product_type: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Product', Product);
