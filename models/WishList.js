const mongoose = require('mongoose');

const WishList = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },

  items: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model('WishList', WishList);
