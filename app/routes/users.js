"use strict"
const User = require("../controllers/user");
const router = require('koa-router')();

// router.post("/signup", User.register);
router.post("/signup", (ctx,next)=>{
    ctx.body = "hello A module router";
    User.register(ctx, next);
}),
module.exports = router;
