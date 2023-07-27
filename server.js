const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const path = require("path");
const connectDB = require("./config/connectDb");
// config dot env file
dotenv.config();

//databse call
const startServer = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(3030, () =>
      console.log("Server has started on port http://localhost:8080")
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();

//rest object
const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//routes
//user routes
app.use("/api/v1/users", require("./routes/userRoute"));
//transections routes
app.use("/api/v1/transections", require("./routes/transectionRoutes"));

//static files
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//port
const PORT = 8080 || process.env.PORT;

//listen server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
