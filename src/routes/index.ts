
import express from 'express';
import { updateApparel, bulkUpdateApparel, checkOrderFulfillment, calculateOrderCost } from '../controllers/ApparelController';

const router = express.Router();

router.put('/apparel', updateApparel);
router.put('/apparel/bulk', bulkUpdateApparel);
router.post('/order/check', checkOrderFulfillment);
router.post('/order/cost', calculateOrderCost);

export default router;
