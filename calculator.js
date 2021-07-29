const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.listen(3000);
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){res.sendFile(__dirname+"/index.html");});
app.post("/",function(req,res){res.send("Sum is "+Number(req.body.num1)+Number(req.body.num1));});
app.get("/bmi",function(req,res){res.sendFile(__dirname+"/bmi.html");});
app.post("/bmi",function(req,res){
  var w=Number(req.body.weight);
  var h=Number(req.body.height);
  res.send("Your BMI is "+(w/h)/h);});
