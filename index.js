const Koa = require('koa')
const route = require('koa-router')()
const koaBody = require('koa-body')

const app = new Koa()

route.get('/', async (ctx, next) => {
    ctx.res.end('hello')
})
route.post('/login', async (ctx, next) => {
    ctx.body = {
        code: 1,
        data: {
            name: '',
            role: '',
            status: 0,
            token: 'faketokennekotekaf',
            uid: '',
        },
    }
    await next();
})

route.put('/authorize', async (ctx, next) => {
    console.log(ctx.request.body)
    ctx.body = {
        code: 1,
        data: '8rsnfq9yfhn93847ryafnasy9283hdf'
    }
    await next()
})

app.use(koaBody())
app.use(async (ctx, next) => {
    await next()
    console.log(ctx.method, '\t', ctx.path)
})

app.use(route.routes()).use(route.allowedMethods())
app.listen(3100, () => {
    console.log(`listening at 3100`)
})



