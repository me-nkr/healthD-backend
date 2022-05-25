const mongoose = require("mongoose");
const dotenv = require("dotenv");

//config dotenv file
dotenv.config();
const DB = process.env.DATABASE.replace("<password>", process.env.PASSWORD);

//function to connect tp mongodb database
const connectDb = async () => {
  try {
    console.log("connecting to mongodb.....");
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongodb was connected.....");
  } catch (e) {
    console, log("couldnt connect to mongoosoe");
  }
};
module.exports = connectDb;
