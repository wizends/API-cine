const Koa = require('koa');
const json = require('koa-json');
const respond = require('koa-respond');
const Router = require('koa-router');
const Open  = require('./config/config');
const bodyparser = require('koa-parser');

const app = new Koa();
const router = new Router();

Open();

app.use(respond());
app.use(bodyparser());
app.use(json());

require('./tasks/tasks.router')(router);

 


//seteo de los middlewares

app.use(router.routes());
app.use(router.allowedMethods());



app.listen(3000, () => console.log('Sever inciado...'));
