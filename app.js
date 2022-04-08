const Application = require('koa');
const Koa = require('koa');
const json = require('koa-json');
const koaRouter = require('koa-router');

const app = new Koa();

const router = new koaRouter();

app.use(router.routes()).use(router.allowedMethods());

router.get('/test', async ctx => ctx.body = 'test endpoint')

app.use(json());

app.use(async ctx => (ctx.body = {"msg":"Hola"}));

app.listen(3000, () => console.log('Sever inciado...'));