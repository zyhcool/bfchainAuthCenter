const Koa = require('koa')
const route = require('koa-router')()

const app = new Koa()

route.get('/', async (ctx, next) => {
    ctx.res.end('hello')
})

app.use(route.routes()).use(route.allowedMethods())

app.listen(3000, () => {
    console.log(`listening at 3000`)
})


