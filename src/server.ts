import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import router from "./routes";

export const app = new Koa();

app.use(bodyParser());
app.use(router.routes());
