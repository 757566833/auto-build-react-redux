const path = require('path');
const Koa = require('koa');
const serve = require('koa-static');
const views = require('koa-views');
const Router = require('koa-router');
const router = new Router();

router.get('/hello', async (ctx) => {
    ctx.status = 200;
    ctx.body = JSON.stringify(
        {
            code:0,
            data:'serverHello!',
            msg:''
        }
    );
})
router.get('/networkError', async (ctx) => {
    ctx.status = 500;
    ctx.body = 'server500!';
})
router.get('/interfaceError', async (ctx) => {
    ctx.status = 200;
    ctx.body = JSON.stringify(
        {
            code:-1,
            data:'',
            msg:'interfaceError'
        }
    );
})
router.get('/login', async (ctx) => {
    await ctx.render('login')
})
router.get('/', async (ctx) => {
    await ctx.render('app')
})
router.get('/**', async (ctx) => {
    await ctx.render('app')
})
const app = new Koa();

app.use(serve(path.join(__dirname, 'public'), {
  maxage: 365 * 24 * 60 * 60 * 1000
}));
app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000);