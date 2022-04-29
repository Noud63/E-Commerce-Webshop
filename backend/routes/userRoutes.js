import express from 'express'
const router = express.Router()
import { authUser, getUserProfile, registerUser } from '../controllers/userController.js'
import { protect } from '../middleWare/authMiddleware.js'

router.post('/login', authUser)        //only single request
router.route('/profile').get(protect, getUserProfile)      
router.route('/').post(registerUser)      

export default router
