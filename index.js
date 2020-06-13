var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views","./views");
app.listen(3000);

app.get("/",function(req,res){
    res.render("trangchu");
});
app.get("/cart",function(req,res){
    res.render("cart");
});
app.get("/details",function(req,res){
    res.render("details");
})
app.get("/products",function(req,res){
    res.render("products");
})