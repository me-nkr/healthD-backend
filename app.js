const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const mongoConnect = require("./helper/mongoConnect");

app.use(express.json());
dotenv.config();
mongoConnect();

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions)); // Use this after the variable declaration

module.exports = app;
