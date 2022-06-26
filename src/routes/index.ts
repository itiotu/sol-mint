import Router from 'koa-router';

import HealthCheck from './HealthCheck/HealthCheck';
import Mint from "./Mint/Mint";
import Wallet from "./Wallet/Wallet";

const router = new Router();

router.use('/', HealthCheck.routes());
router.use('/mint', Mint.routes());
router.use('/wallet', Wallet.routes());

export default router;
