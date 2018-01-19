const Koa = require('koa');
const app = new Koa()
const path = require('path')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const ejs = require('ejs');
const views = require('koa-views')
const MysqlStore = require('koa-mysql-session')
const koaStatic = require('koa-static')

app.use(bodyParser())
let router = new Router()
router.get('/index', async (ctx, next) => {
    await ctx.render('index',{
        title:'tle'
    })
    // ctx.body = 'helloworld page!'
})
app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}))
app.use(koaStatic(
  path.join(__dirname , './public')
))

app.use(router.routes()).use(router.allowedMethods())
app.use(require('./routers/signup.js').routes())
app.use(require('./routers/signout.js').routes())
app.use(require('./routers/login.js').routes())
app.use(require('./routers/index.js').routes())
app.listen(3333)
console.log(`listen at 3333`)
