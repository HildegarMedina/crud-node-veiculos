require('dotenv').config();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

const userRouters = require("./routes/veiculos");

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log("DB is connected"))
.catch(err => console.log(err));

//Settings
app.set("port", process.env.PORT || 8000);

//Middleware
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Routes
app.use(userRouters);

//Static files

//Error hand

//Start server
app.listen(app.get("port"), () => {
    console.log("Server on port: " + app.get("port"));
})