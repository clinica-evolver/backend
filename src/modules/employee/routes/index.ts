import { Router } from 'express'

import { CreateEmployeeController } from '../controller/create-employee'
import { DeleteAEmployeeController } from '../controller/delete-employee'
import { UpdateEmployeeController } from '../controller/update-employee'
import { ListEmployeeController } from '../controller/list-employee'

const createEmployeeController = new CreateEmployeeController()
const deleteAEmployeeController = new DeleteAEmployeeController()
const updateEmployeeController = new UpdateEmployeeController()
const listEmployeeController = new ListEmployeeController()

const employeeRouter = Router()

employeeRouter.post('/', createEmployeeController.handle)
employeeRouter.delete('/:id', deleteAEmployeeController.handle)
employeeRouter.put('/', updateEmployeeController.handle)
employeeRouter.get('/', listEmployeeController.handle)

export { employeeRouter }
