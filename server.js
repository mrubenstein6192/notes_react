const express = require("express");
const mongoose = require("mongoose");

const logger = require("morgan");

const app = express();
const PORT = process.env.PORT || 3001;

//set up middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
//middleware so we can keep track of our requests
app.use(logger("dev"));

//turn on routes
const routes = require("./routes");
app.use(routes);

//set up mongoose connection
mongoose.connect(process.env.MONGODV_URI || "mongodb: //:27017/notetaker", {useNewUrlParser: true});

//tell mongoose to use built in Javascript Promise object to handle their promises
mongoose.Promise = Promise;

//turn on our server
app.listen(PORT, () => console.log("Now listening on local host: " + PORT))