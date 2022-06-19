const express = require("express");
const router = express.Router();

const {
  addToCart,
  getUserCart,
  deleteUserCart,
  CheckoutCart,
} = require("../controllers/cart");
const auth = require("../middleware/auth");

router.post("/cart/:productid/add", auth, addToCart);

router.get("/user/cart", auth, getUserCart);

router.delete("/cart/:id/remove", auth, deleteUserCart);

router.post("/checkout", auth, CheckoutCart);

module.exports = router;
