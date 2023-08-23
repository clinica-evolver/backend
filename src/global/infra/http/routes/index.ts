import { Router } from 'express'

import { userRouter } from '@modules/user/routes'

const routes = Router()

routes.use('/user', userRouter)

export default routes
