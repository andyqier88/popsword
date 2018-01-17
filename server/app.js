const Koa = require('koa');
const app = new Koa()
app.use(async(ctx)=>{
	ctx.body = 'Hello koa'
})

app.listen(3333)
console.log(`listen at 3333`)
