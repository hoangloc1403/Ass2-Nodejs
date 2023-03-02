const mongoose = require("mongoose");
const Dishes = require("../models/player");

const url = "mongodb://127.0.0.1:27017/worldcup2022";
mongoose.set("strictQuery", false);
const connect = mongoose.connect(url);

connect.then(
  (db) => {
    console.log("Connected correctly to server");
  },
  (err) => {
    console.log("error db: ", err);
  }
);
