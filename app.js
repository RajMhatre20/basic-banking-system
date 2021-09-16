const express = require("express");
const app = express();

require("dotenv/config");
let port = process.env.PORT;
const mongoose = require("mongoose");

// Schemas
const Details = require("./models/detailSchema");
const History = require("./models/historySchema");

// Bodyparser
app.use(express.urlencoded({extended: false}));
app.use(express.json())

// Connect to DB
mongoose
  .connect(process.env.DB_CONNECTION)
  .then((data) => {
    console.log("Connected to DB!");
  })
  .catch((err) => {
    console.log("Failed connection to DB");
  });

// Static files
app.use(express.static("public"));
app.use('/css',express.static(__dirname + 'public/css'));
app.use('/js',express.static(__dirname + 'public/js'));
app.use('/img',express.static(__dirname + 'public/img'));
  
  
// Home Page
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// Customers Page
const customers=require('./routes/customers')
app.use("/customers",customers);

// Transfer History
const history=require('./routes/transferhistory.js')
app.use("/transferhistory",history);

// APIs
app.get("/api/details", async (req, res) => {
  const records = await Details.find({});
  res.json(records);
});

app.get("/api/history", async (req, res) => {
  const records = await History.find({});
  res.json(records);
});

app.listen(port, () => {
  console.log(`App is listening at ${port}`);
});