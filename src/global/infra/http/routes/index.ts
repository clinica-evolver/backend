import { Router } from 'express'

import { adminRouter } from '@modules/admin/routes'
import { accessRouter } from '@modules/access/routes'

const routes = Router()

routes.use('/admin', adminRouter)
routes.use('/access', accessRouter)

export default routes
