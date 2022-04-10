const Koa = require('koa');
const respond = require('koa-respond');
const Router = require('koa-router');

const bodyparser = require('koa-parser');
const cors = require('@koa/cors')

const app = new Koa();
const router = new Router();

const Open  = require('./config/config');
Open();

app.use(respond());
app.use(cors());
app.use(bodyparser());

require('./tasks/tasks.router')(router);

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => console.log('Sever inciado...'));

