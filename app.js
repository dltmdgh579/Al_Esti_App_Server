const express = require("express");
const app =require('./config/express')();
const myRouter = require("./router");
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));

app.use("/sensor",myRouter)

app.listen(9000, function () {
  console.log("server start");
});