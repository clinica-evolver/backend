import { Router } from 'express'

import { CreateAdminController } from '../controller/create-admin'
import { DeleteAdminController } from '../controller/delete-admin'
import { UpdateAdminController } from '../controller/update-admin'
import { ListAdminController } from '../controller/list-admin'

const createAdminController = new CreateAdminController()
const deleteAdminController = new DeleteAdminController()
const updateAdminController = new UpdateAdminController()
const listAdminController = new ListAdminController()

const adminRouter = Router()

adminRouter.post('/', createAdminController.handle)
adminRouter.delete('/:id', deleteAdminController.handle)
adminRouter.put('/', updateAdminController.handle)
adminRouter.get('/', listAdminController.handle)

export { adminRouter }
