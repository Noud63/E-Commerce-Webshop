import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import cors from 'cors'
import colors from 'colors'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
const PORT = process.env.PORT || 5000

dotenv.config()

connectDB()

const app = express()
app.use(express.json())
//app.use(cors())

app.get('/', (req, res) => {
    res.send('Api is running')
})

// Everything that goes to  'api/products or api/users'
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)

app.get('/api/config/paypal', (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID)
})

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow))