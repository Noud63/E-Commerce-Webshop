import express from 'express'
const router = express.Router()
import { getProducts, getProductById } from '../controllers/productController.js'

//routes pointing to specific controller
// router.get('/', getProducts)
// router.get('/', getProductById)

//or:
router.route('/').get(getProducts)
router.route('/:id').get(getProductById)

// Above are chainable route handlers for one route path by using router.route():
// app.route('/')
//     .get((req, res) => {
//         res.send('Hello world')
//     })
//     .post((req, res) => {
//         res.send('Come in')
//     })
//     .put((req, res) => {
//         res.send('Want some tea')
//     })
export default router