import { Context } from 'koa';
import Router from 'koa-router';
import CardGenerator from "../../Services/CardGenerator";
import Pinata from "../../Services/Pinata";
import Mint from "../../Services/Mint";

const router = new Router();

router.get('mint', '/card', async (ctx: Context) => {
    const card = await CardGenerator.generate();

    const uri = await Pinata.uploadCard(card);

    const transactionReceipt = await Mint.nft(uri);

    ctx.body = {
        card: card,
        uri: uri,
        transactionReceipt: transactionReceipt
    };
});

export default router;
