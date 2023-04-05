const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const robotsroute = require("./routes/robot");
const app = express();

const authRoute = require("./routes/auth");


mongoose.connect("mongodb://localhost:27017/robot", {
  useNewUrlParser: true,
});

app.use(cors());
const PORT = process.env.PORT || 8080;
console.log(PORT)

app.use(express.json());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", robotsroute);
app.use("/api", authRoute);

app.listen(PORT, () => {
    console.log("Sever Running");
  });
  
  