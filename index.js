const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const apiRouter = require("./routes/api/index");

mongoose.connect("mongodb://0.0.0.0:27017/expense_tracker").then(() => {
  console.log("connected");
});
const server = express();
server.use(cors());
server.use(express.json());

server.use("/api", apiRouter);

server.listen(3000);
