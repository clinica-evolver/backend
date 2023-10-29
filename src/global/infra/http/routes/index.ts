import { Router } from 'express'

import { adminRouter } from '@modules/admin/routes'
import { accessRouter } from '@modules/access/routes'
import { loginRouter } from '@modules/login/routes'
import { employeeRouter } from '@modules/employee/routes'

const routes = Router()

routes.use('/admin', adminRouter)
routes.use('/access', accessRouter)
routes.use('/login', loginRouter)
routes.use('/employee', employeeRouter)

export default routes
