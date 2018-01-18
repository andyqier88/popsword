const Koa = require('koa');
const app = new Koa()
const path = require('path')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const ejs = require('ejs');
const views = require('koa-views')
const MysqlStore = require('koa-mysql-session')
const koaStatic = require('koa-static')

let router = new Router()
router.get('/index', async (ctx, next) => {
	await ctx.render('/index', {
		title: 'tle'
	})
})
module.exports = router
