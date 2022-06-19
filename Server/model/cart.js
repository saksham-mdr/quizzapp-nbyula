const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  
  furnitureID: {
    type: String,
    required: true,
  },
  creatorEmail:{
   type:String,
  },
  creatorName:{
   type:String,
  },
  price: {
    type: Number,
    min: 0,
  },
  catagory:{
    type:String,
  },
  creatorID: {
    type: String,
  },
  buyerID: {
    type: String,
  },
  point:{
    type: Number,
  }
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
