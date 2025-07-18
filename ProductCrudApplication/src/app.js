let express=require("express");
let bodyParser=require("body-parser");
let db=require("../db.js");
let router=require("./routes/route.js");
require("dotenv").config();

let app=express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.set("views engine", "ejs");
app.use("/",router);
module.exports=app;
