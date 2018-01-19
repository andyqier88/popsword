const Koa = require('koa');
const fs = require('fs')
const userModel = require('../lib/mysql.js');
const app = new Koa()
const router = require('koa-router')()
const bodyParser = require('koa-bodyparser')
// let router = new Router()
app.use(bodyParser())
app.use(router.routes());
// app.use(router.routes()).use(router.allowedMethods())
router.get('/signup', async(ctx, next) => {
	ctx.body = {
		data: 'signup'
	}
	console.log(`ctx${ctx.body}`)
})
router.post('/api/signup', async(ctx, next) => {
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
})

// app.use(bodyParser({}))
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
// 	extended: true
// }));
module.exports = router