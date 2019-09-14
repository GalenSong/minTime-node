"use strict";
const UserModel = require("../models/userModel");
const {decrypt_prvKey, publicKey} = require("../utils/rsaUtil");
const jwt = require("jsonwebtoken");

class UserController {
    constructor() {
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
    }

    async login(ctx, next) {
        let {email, password} = JSON.parse(ctx.request.body.data);
        password = decrypt_prvKey(password);

        try{
            let userInfo = await UserModel.findOne({email});
            if(!userInfo) {
                return ctx.body = {
                    code: -1,
                    data: "INVALID_USER",
                    msg: "用户不存在"
                }  
            }
    
            const newPassword = decrypt_prvKey(userInfo.password);
    
            if(password !== newPassword) {
                return ctx.body = {
                    code: 0,
                    status: "INVALID_PASSWORD",
                    msg: "密码错误"
                } 
            }
    
            const token = jwt.sign({
                userId: userInfo.userId
            }, 
            publicKey, {
                expiresIn: "10s"
            });
    
            return ctx.body = {
                code: 1,
                data: token,
                status: "LOGIN_SUCCESS",
                msg: "登录成功"
            }
        }catch(e) {
            return ctx.body = {
                code: -1,
                status: "LOGIN_FAILED",
                msg: "登录失败"
            }
        } 
    }

    async register(ctx, next) {
        let data = JSON.parse(ctx.request.body.data);
        let userInfo = await UserModel.findOne({email: data.email});
        if(userInfo) {
            return ctx.body = {
                code: 0,
                status: "USER_EXISTED",
                msg: "邮箱已被注册"
            }
        }

        UserModel.create(data);
        return ctx.body = {
            code: 1,
            status: "REGISTER_SUCCESS",
            msg: "注册成功"
        }
    }
}

module.exports = new UserController();