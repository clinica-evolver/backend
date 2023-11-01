import { Router } from 'express'

const monitoringRouter = Router()

monitoringRouter.get('/', function mainHandler(req, res) {
  throw new Error('Sentry error!')
})

export { monitoringRouter }
