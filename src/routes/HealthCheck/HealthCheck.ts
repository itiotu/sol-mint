import { Context } from 'koa';
import Router from 'koa-router';

const router = new Router();

router.get('health-check', '/', async (ctx: Context) => {
    ctx.body = true;
});

export default router;
