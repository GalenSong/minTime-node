"use strict"
const UserController = require("../controllers/userController");
const router = require('koa-router')();
const {publicKey} = require("../utils/rsaUtil");

router.post("/register", UserController.register);

router.get("/getPublicKey", (ctx,next) => {
    ctx.body = {
        key: publicKey
    }
});

router.get("/getData", (ctx, next) => {
    ctx.body = {
        code: 1,
        status: "SUCCESS"
    }
})

router.post("/login", UserController.login);

module.exports = router;
