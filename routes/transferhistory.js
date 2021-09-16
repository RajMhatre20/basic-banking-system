const express=require('express');
const path=require('path');
let router=express.Router();
const Details = require("../models/detailSchema");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,'../views/history.html'));
});
  
module.exports=router;