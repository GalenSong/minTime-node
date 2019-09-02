"use strict";
const mongoose = require("../db/db");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    id: {
        type: Number, 
        default: 1
    },
    create_time: {
        type: Date, default: Date.now()
    },
});

module.exports = mongoose.model("User", UserSchema);