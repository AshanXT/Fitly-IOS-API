const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;
mongoose.set("strictQuery", false);
mongoose.connect(URL, {});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB Connected Successfully!");
});

// Importing product schema
const productRouter = require("./routes/products.js");

// Update the route to match '/api/products'
app.use("/api/products", productRouter);

app.listen(PORT, () => {
    console.log(`Server is up & running on PORT ${PORT}`);
});
