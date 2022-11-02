const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());

const fileRoutes = require("./routes/file");

app.use("/api/v1/file", fileRoutes);
app.use("/public", express.static(path.join(__dirname, "public")));

const mongodbUri = "mongodb://localhost:27017/uploadproject";

mongoose.connect(mongodbUri, {
  useNewUrlParser: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to mongodb...");
});

mongoose.connection.on("error", (err) => {
  console.log("Error connecting to mongo", err);
});

app.listen(4000, () => {
  console.log("App is running on PORT 4000");
});
