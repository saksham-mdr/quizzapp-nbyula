const mongoose = require("mongoose");

const checkoutSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  furnitureID: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    min: 0,
  },
  creatorID: {
    type: String,
  },
  buyerID: {
    type: String,
  },
  buyerLocation: {
    type: String,
  },
});

const Checkout = mongoose.model("Checkout", checkoutSchema);

module.exports = Checkout;
