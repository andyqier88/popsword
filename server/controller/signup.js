const Koa = require('koa');
const fs = require('fs')
const userModel = require('../lib/mysql.js');
const app = new Koa()
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const user_controller = require('./../controller/signup')
let router = new Router()
app.use(bodyParser())
app.use(router.routes());
exports.signup = async(ctx, next) => {
    // let postData = ctx.request.body
    // ctx.body = postData
    console.log(this.request)
    console.log(ctx.request.body)
        // console.log(ctx.request.body.name)
        // let name = ctx.req.body.name;
        // let pass = ctx.req.body.password;
        // console.log(ctx.request.body)
    await userModel.findUser("hu").then(async(results) => {
        console.log(results)
        if (results) {
            try {
                // throw Error('用户已注册')
            } catch (error) {
                console.log(error)
            }
            ctx.body = {
                data: results
            }
        } else {
            ctx.body = {
                data: 2
            };
        }
    })
}