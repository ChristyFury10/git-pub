const express = require("express");
const app= express();
const drinks = require("./models/drinks");
app.set("view engine", "ejs");


app.get("/", (req, res)=>{
    res.send('Welcome to the Gitpub App!');
})


app.get("/drinks", (req, res)=>{
    res.render("drinks_index", {drinks}) 

})




app.listen(3000, ()=>{
    console.log("listening on port 3000🎧")
})