const { application } = require("express");
const Furniture = require("../model/furniture");
// const Review = require("../model/review");

exports.getFurniture = async (req, res) => {
  try {
    const furnitures = await Furniture.find({});
    res.json({ furnitures });
   
  } catch (e) {
    res.redirect("/error");
  }
};

exports.getMyFurniture = async (req, res) => {
  try {
    const furnitures = await Furniture.find({ creatorID: req.userData.userId });
    res.json({ furnitures });
  } catch (e) {
    res.redirect("/error");
  }
};

exports.postFurniture = async (req, res) => {
  try {
    const {point}=req.body;

    const newFurniture = {
      ...req.body,
    };
    if(point>10){
      return res.json({
        success: false,
        status: 400,
        message: "point cannot be greater than 10",
      });
    }
    await Furniture.create(newFurniture);

    res.json({
      success: true,
      status: 200,
      message: "product added succesfully",
    });
  } catch (e) {
    res.json(e);
  }
};

exports.getFurnitureByID = async (req, res) => {
  try {
    const { id } = req.params;
    // inflating the found product with the reviews using populate
    const furnitures = await Furniture.findById(id).populate("reviews");
    res.json({ furnitures });
  } catch (e) {
    res.redirect("/error");
  }
};

exports.getEditFurnitureByID = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);

    res.render("products/edit", { product });
  } catch (e) {
    req.flash("error", "oops,something went wrong");
    res.redirect("/error");
  }
};

exports.patchFurnitureByID = async (req, res) => {
  try {
    const updatedProduct = req.body;
    const { id } = req.params;

    await Product.findByIdAndUpdate(id, updatedProduct);

    res.redirect(`/products/${id}`);
  } catch (e) {
    req.flash("error", "oops,something went wrong");
    res.redirect("/error");
  }
};



exports.putFurnitureByID = async (req, res) => {
  try {
    const updatedProduct = req.body;
    const { id } = req.params;

    await Product.findByIdAndUpdate(id, updatedProduct);

    res.redirect(`/products/${id}`);
    res.json({
      success: true,
      status: 200,
      message: "product updated succesfully",
    });
  } catch (e) {
    req.flash("error", "oops,something went wrong");
    res.redirect("/error");
  }
};




exports.deleteFurniture = async (req, res) => {
  try {
    const { id } = req.params;
    
    await Furniture.findOneAndDelete(id);
    res.json({
      success: true,
      status: 200,
      message: "product deleted succesfully",
    });
  } catch (e) {
    res.json({e})
  }
};







// exports.postFurnitureReview = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);

//     const { rating, comment } = req.body;

//     const review = new Review({ rating, comment, user: req.user.username });

//     product.reviews.push(review);

//     await product.save();
//     await review.save();

//     req.flash("success", "Successfully created your review!!");

//     res.redirect(`/products/${id}`);
//   } catch (e) {
//     req.flash("error", "oops,something went wrong");
//     res.redirect("/error");
//   }
// };
