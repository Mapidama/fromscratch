var express=require("express");
var app= express();

app.get("/hello",function(req,res) {
  res.send("hello World");
});

app.listen(9500,function(err){
  console.log("Application started on port 9500 !");
})
