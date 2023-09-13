import { Router } from 'express'

import { CreateUserController } from '../../user/controller/CreateUseController'

const createUserController = new CreateUserController()

const userRouter = Router()

userRouter.post('/', createUserController.handle)
userRouter.get('/', (req, res) => {
  res.send('Hello World')
})

export { userRouter }
