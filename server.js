// npm init
// npm install express
// npm install nodemon
// npm install mongoose --save

const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

app.use(cors());
let dbConnect = require("./dbConnect");

// parse requests of content-type - application/json
app.use(express.json());
app.get("/", (req, res) => {
    res.json({ message: "Connected to MongoDB app"});
});

//path to routes

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
