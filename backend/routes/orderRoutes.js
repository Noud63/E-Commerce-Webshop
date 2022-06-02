import express from 'express'
const router = express.Router()
import { addOrderItems, getOrderById, updateOrderToPaid, getMyOrders } from '../controllers/orderController.js'
import { protect } from '../middleWare/authMiddleware.js'

router.route('/').post(protect, addOrderItems)             // /api/orders/
router.route('/myorders').get(protect, getMyOrders)       // /api/orders/myorders
router.route('/:id').get(protect, getOrderById)            // /api/orders/:id
router.route('/:id/pay').put(protect, updateOrderToPaid)   // put = update  /api/orders/:id/pay

export default router