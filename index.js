const Koa = require('koa')
const Router= require('koa-router')

const app = new Koa()
const router = new Router()

router.get('/', ctx => {
  ctx.body = 'this is data in root path'
})

app.use(router.routes())
app.listen(3210, () => {
  console.log('http://localhost:3210 is already start')
})
