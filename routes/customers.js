const express=require('express');
const path=require('path');
let router=express.Router();
const Details = require("../models/detailSchema");
const History = require("../models/historySchema");


const app=express();
app.use(express.urlencoded({extended: false}));
app.use(express.json())

// Customers Page
router.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../views/customers.html"));
});

// Selected User
router.get("/selecteduser", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../views/selecteduser.html"));
});

// Transaction Successful
router.post('/transaction', async (req,res)=>{
  var response = {  
    transferto:req.body.transferto,  
    amount:req.body.amount,
    transferfrom:req.body.transferid
  };  
  await Details.findByIdAndUpdate(response.transferto,{$inc:{money: parseInt(response.amount)}});
  await Details.findByIdAndUpdate(response.transferfrom,{$inc:{money: -parseInt(response.amount)}});
  const sender=await Details.findById(response.transferfrom);
  const reciever=await Details.findById(response.transferto);
  var newTransaction = new History(
    { 
      sender:sender.name,
      reciever:reciever.name,
      amount:response.amount
    }
  );
  newTransaction.save(function(err, data) {
    if(err) {
        console.log(err);
    }
    else {
      res.sendFile(path.resolve(__dirname,"../views/transactionSuccessful.html"));
    }
  });
});

module.exports=router;