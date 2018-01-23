const Koa = require('koa');
const fs = require('fs')
const router = require('koa-router')()
const userModel = require('../lib/mysql.js');
const app = new Koa()

// const bodyParser = require('koa-bodyparser')
// const user_controller = require('./../controller/signup')
// let router = new Router()
// app.use(bodyParser())
app.use(router.routes());
// app.use(router.routes()).use(router.allowedMethods())
// router.get('/signup', async(ctx, next) => {
//     ctx.body = {
//         data: 'signup'
//     }
//     console.log(`ctx${ctx.body}`)
// })

router.post('/api/signup', async(ctx, next) => {
	// let postData = ctx.request.body
	// ctx.body = postData
	// console.log(this.request)
	// console.log(ctx.request)
	let name = ctx.request.body.name
	console.log(ctx.request.body)
	console.log(ctx.request.body.name)
	// let pass = ctx.req.body.password;
	// console.log(ctx.request.body)
	await userModel.findUser(name).then(async(results) => {
		console.log(results)
		if (results.length) {
			try {
				// throw Error('用户已注册')
			} catch (error) {
				console.log(error)
			}
			ctx.body = {
				code:200,
				data: results
			}
		} else {
			ctx.body = {
				code:100,
				data: [],
				mes:'用户名或密码错误'
			};
		}
	})
})
// router.post('/api/signup', user_controller.signup)
// app.use(bodyParser({}))
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
// 	extended: true
// }));
module.exports = router
