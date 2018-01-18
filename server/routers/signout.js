const Koa = require('koa');
const fs = require('fs')
const userModel = require('../lib/mysql.js');
const app = new Koa()
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
let router = new Router()
router.get('/signout', async (ctx, next) => {

	ctx.body = {
		data: 'signout'
	}
	console.log(ctx.body)
})

router.post('/signout', async (ctx, next) => {
	let user = {
		name: ctx.request.body.name,
		pass: ctx.request.body.password
	}
	await userModel.findUser(user.name)
		.then(async (results) => {
			if (results.length) {
				try {
					throw Error('用户已注册')
				} catch (error) {
					console.log(error)
				}
				ctx.body = {
					data: 1
				}
			} else if (user.pass === '') {
				ctx.body = {
					data: 2
				};
			}
		})
})
// app.use(router.routes()).use(router.allowedMethods())
// app.use(bodyParser({}))
module.exports = router
