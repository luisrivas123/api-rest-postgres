import { Router } from 'express'
import { UserController } from '../controllers/user.controller.js'
import { verifyToken } from '../middlewares/jwt.middleware.js'

const userRouter = Router()

userRouter.post('/register', UserController.register)
userRouter.post('/login', UserController.login)
userRouter.get('/profile', verifyToken, UserController.profile)

export default userRouter
