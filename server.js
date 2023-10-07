const mongoose = require("mongoose");
require("dotenv").config("./env");
const app = require("./app");
const connect = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("connected now");
  } catch (err) {
    console.log(err.message);
  }
};
connect();
app.listen(3000, () => {
  console.log("serverStarted");
});