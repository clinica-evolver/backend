import { Router } from 'express'

import { CreateAccessController } from '../controller/create-access'

const createAccessController = new CreateAccessController()

const accessRouter = Router()

accessRouter.post('/', createAccessController.handle)

export { accessRouter }
