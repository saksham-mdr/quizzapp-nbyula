const express = require("express");
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");
const connectDB = require("./server/db");
require("dotenv").config();

require("dotenv/config");

const app = express();

/** Cross Platfrom **/
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,Authorization"
  );
 // res.setHeader("Access-Control-Allow-Credentials","true")
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,DELETE,PATCH,OPTIONS");
  next();
});

app.use(bodyParser.json()); //returns middleware that only parses json.
app.use(methodOverride("_method")); //used for request like patch.
app.use(cookieParser()); //a middleware which parses cookies attached to the client request object.
app.use(express.json()); //returns middleware that only parses json but with buit in express.
app.use(express.urlencoded({ extended: true })); //TO GET FORM DATA
app.use(express.static(path.join(__dirname, "static")));
app.use(express.static("./public"));
app.use("/uploads/images", express.static(path.join("uploads", "images"))); //Multer directory for images
app.use("/uploads/files", express.static(path.join("uploads", "files"))); //Multer directory for files
app.use("/uploads/gallery", express.static(path.join("uploads", "gallery")));

app.use(require("./routes/auth"));
app.use(require("./routes/cart"));
app.use(require("./routes/furniture"));


// app.put("/update",async(req,res)=>{
//   const newQuestion=req.body.newQuestion;
//   const newoption1=req.body.newoption1;
//   const newoption2=req.body.newoption2;
//   const newoption3=req.body.newoption3;
//   const newoption4=req.body.newoption4;
//   const newanswer=req.body.newanswer;
//   const newcategory=req.body.newcategory;

//   const id=req.body.id;
//     try{
//       await 
//     }


// })


connectDB();

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server Connected at Port 5000`);
});
