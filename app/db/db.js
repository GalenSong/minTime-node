"use strict";

const mongoose = require("mongoose");
const DB_URL = "mongodb://localhost:27017/mintime";

mongoose.connect(DB_URL);

const con = mongoose.connection;

con.on("connected", function() {
    console.log('Mongoose connection open to ' + DB_URL);
});

con.on("error", function (err) {
    console.log("Mongoose connection error " + err);
});

con.on("disconnected", function() {
    console.log("Mongoose connection disconnected");
});

module.exports = mongoose;