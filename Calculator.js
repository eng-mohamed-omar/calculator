
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.listen(3000, function(){
  console.log("server started on port 3000.");
});

app.post("/", function(req, res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var resolt = num1 + num2;
  res.send("the resolt of the calculation is " + resolt);
})


app.post("/bmiCalculator", function(req, res){
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);
  var bmi = weight/(Math.pow(height, 2));
  res.send("Your BMI is " + bmi);
})

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.get("/bmiCalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});
