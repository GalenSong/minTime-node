"use strict";
const mongoose = require("../db/db");
const Schema = mongoose.Schema;
const uuidv1 = require("uuid/v1");

const UserSchema = new Schema({
    nickname: {
        type: String,
        default: uuidv1()
    },
    userId: {
        type: String,
        default: uuidv1()
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    
    create_time: {
        type: Date, default: Date.now()
    }
});

module.exports = mongoose.model("user", UserSchema);