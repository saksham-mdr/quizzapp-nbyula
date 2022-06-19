const mongoose = require("mongoose");

const furnitureSchema = new mongoose.Schema({
  // name: {
  //   type: String,
  //   trim: true,
  //   // required: true,
  // },


  question : {
    type: String,
    trim: true,
    required: true,
  },

  option1 :{
    type: String,
    trim: true,
    // required: true,
  },
  option2:{
    type: String,
    trim: true,
    // required: true,
  },

  option3:{
    type: String,
    trim: true,
    // required: true,
  },
  option4:{
    type: String,
    trim: true,
    // required: true,
  },
  answer:{
    type:String,
    trim:true,
  },

  point:{
    type:Number,
    trim:true,

    required: true,
  },



  catagory:{
    type: String,
    required: true,
  },
  creatorID:{
    type: String,
  },
  desc: {
    type: String,
    trim: true,
  },
});

const Furniture = mongoose.model("Quizz", furnitureSchema);

module.exports = Furniture;
