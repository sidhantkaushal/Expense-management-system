const mongoose = require("mongoose");
const colors = require("colors");

// uri =
//   "mongodb+srv://kaushalsidhant434:Dadisdad1@cluster0.uxfbq0s.mongodb.net/expenseapp?retryWrites=true&w=majority";

const connectDB = (uri) => {
  console.log("connect db");
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
