"use strict";
const UserModel = require("../models/user");
const {encrypt_pubKey,decrypt_prvKey} = require("../utils/rsaUtil");
const jwt = require("jsonwebtoken");

class User {
    constructor() {
        // super();
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
    }

    async login(ctx, next) {
        let data = JSON.parse(ctx.request.body.data);
        data.password = decrypt_prvKey(data.password);
        const {email, password} = data;
        console.log("password", password);
        let userInfo = UserModel.findOne({email}, function(err, userInfo) {
            const newPassword = decrypt_prvKey(userInfo.password);
            if(password === newPassword) {
                const token = jwt.sign({
                    userId: userInfo.userId
                }, "my_token", {expiresIn: "2h"});
                return ctx.body = {
                    data: token,
                    msg: "登录成功"
                }
            }
        });
        

        return userInfo;
    }

    async register(ctx, next) {
        let data = JSON.parse(ctx.request.body.data);
        console.log("ctx: " + JSON.stringify(ctx));
        UserModel.create(data);
        return ctx.body = {
            status: "success",
            msg: "注册成功"
        }
    }
}

module.exports = new User();