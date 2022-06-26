import { Context } from 'koa';
import Router from 'koa-router';
import Mint from "../../Services/Mint";

const router = new Router();

router.get('wallet', '/:wallet/nft', async (ctx:Context) => {
    ctx.body = await Mint.getAllNftForWallet(ctx.params.wallet);
})

export default router;
