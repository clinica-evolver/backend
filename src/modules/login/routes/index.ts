import { Router } from 'express'

import { LoginController } from '../controller/login-controller'

const createAdminController = new LoginController()

const loginRouter = Router()

loginRouter.post('/', createAdminController.handle)

export { loginRouter }
