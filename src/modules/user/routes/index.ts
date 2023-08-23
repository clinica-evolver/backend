import { Router } from 'express'

import { CreateUserController } from '../../user/controller/CreateUseController'

const createUserController = new CreateUserController()

const userRouter = Router()

userRouter.post('/', createUserController.handle)

export { userRouter }
