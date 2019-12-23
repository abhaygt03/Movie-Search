var request=require("request");
var express=require('express');
var bodyParser=require("body-parser");

var app=express();
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/",function(req,res){
res.render("landing.ejs");
});


app.get("/search",function(req,res){
var movie=req.query.movie;

request('http://www.omdbapi.com/?apikey=thewdb&s='+movie, function (error, response, body) {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  body=JSON.parse(body);
res.render("result.ejs",{body:body})
});
});





app.get("*",function(req,res){
 res.send("404 Page does not exists");
});

app.listen(3000,function(){
	console.log("server online")
})