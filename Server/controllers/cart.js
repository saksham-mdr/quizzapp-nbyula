const User = require("../model/users");
const Product = require("../model/furniture");
const Cart = require("../model/cart");
const Checkout = require("../model/checkout");

exports.addToCart = async (req, res) => {
  const { productid } = req.params;
  const {answer}=req.body;
  const product = await Product.findById(productid);

  const currentUser = req.userData;
  
  var point = 0;
  if(answer==product.answer){
    point=product.point;
  }
  
  const isCartEmpty=await Cart.findOne({$and: [{  catagory:  product.catagory}, { buyerID: currentUser.userId  }]});
  
  if(!!isCartEmpty){
    const updatedpoint={
      point:isCartEmpty.point+point,
    }
    await Cart.findOneAndUpdate(isCartEmpty.id, updatedpoint);
    return res.json({
      status: 200,
      message: "Submited sucessfully",
      value: "true",
    });
  }else{
    const {username, email}=await User.findById(product.creatorID)
    try {
      await Cart.create({
       
        furnitureID: product.id,
        catagory:product.catagory,
        creatorName:username,
        creatorEmail:email,
        // price: product.price,
        creatorID: product.creatorID,
        buyerID: currentUser.userId,
        point : point,
        // img: product.img,
      });
      return res.json({
        status: 200,
        message: "Submited sucessfully",
        value: "true",
      });
    } catch (e) {
      console.log(e);
      return res.json({
        status: 400,
        e,
        value: "true",
      });
    }

  }
  

  
};

exports.getUserCart = async (req, res) => {
  const userid = req.userData.userId;

  const cart = await Cart.find({ buyerID: userid });

  res.json({ cart });
};

exports.deleteUserCart = async (req, res) => {
  const productid = req.params.id;

  await Cart.findByIdAndDelete(productid);

  res.json({
    status: 400,
    message:"Remove Sucessfull",
    value: "true",
  });
};

exports.CheckoutCart = async (req, res) => {
  const cart = await Cart.findOne({buyerID:req.userData.userId});
  const user =await User.findById(req.userData.userId);
 
  try {
    
    await Checkout.create({
      name: cart.name,
      furnitureID: cart.furnitureID,
      price: cart.price,
      creatorID: cart.creatorID,
      buyerID: cart.buyerID,
      location: user.location
    });
    await Cart.findByIdAndDelete(cart.id)
    return res.json({
      status: 200,
      message: "The Items will be delivered Soon",
      value: "true",
    });
  } catch (e) {
    console.log(e);
    return res.json({
      status: 400,
      e,
      value: "true",
    });
  }
};
