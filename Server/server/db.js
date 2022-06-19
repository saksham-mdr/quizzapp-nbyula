const mongoose = require("mongoose");


const connectDB = async () => {
   await mongoose.connect("mongodb://localhost:27017/furnitureLand"



    // await mongoose.connect("mongodb+srv://saksham:<saksham@123>@mern.kfk8zu3.mongodb.net/?retryWrites=true&w=majority"
    , {
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Database Connected!");
};

module.exports = connectDB;