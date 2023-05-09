const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const apiRouter = require("./routes/api/index");

mongoose
  .connect(
    "mongodb+srv://rasul8215:rasul8215@cluster0.aqrjrwk.mongodb.net/expense_tracker"
  )
  .then(() => {
    console.log("connected");
  });
const server = express();
server.use(cors());
server.use(express.json());

server.use("/api", apiRouter);

server.listen(process.env.PORT ?? 3000, () => {
  console.log(`server runing at${process.env.PORT}`);
});
