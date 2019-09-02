"use strict"
const User = require("../controllers/user");
const router = require('koa-router')();
const {publicKey} = require("../utils/rsaUtil");

// router.post("/signup", User.register);
router.post("/signup", User.register);

router.get("/getPublicKey", (ctx,next) => {
    ctx.body = {
        key: publicKey
    }
});

router.post("/login", User.login);

module.exports = router;
