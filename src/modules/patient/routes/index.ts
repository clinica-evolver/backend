import { Router } from 'express'

import { CreatePatientController } from '../controller/create-patient'
import { DeletePatientController } from '../controller/delete-patient'
import { UpdatePatientController } from '../controller/update-patient'
import { ListPatientController } from '../controller/list-patient'

const createPatientController = new CreatePatientController()
const deletePatientController = new DeletePatientController()
const updatePatientController = new UpdatePatientController()
const listPatientController = new ListPatientController()

const patientRouter = Router()

patientRouter.post('/', createPatientController.handle)
patientRouter.delete('/:id', deletePatientController.handle)
patientRouter.put('/', updatePatientController.handle)
patientRouter.get('/', listPatientController.handle)

export { patientRouter }
