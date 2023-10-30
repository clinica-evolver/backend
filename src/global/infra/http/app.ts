import 'reflect-metadata'

import express from 'express'
import cors from 'cors'

import 'global/container'
import { routes } from 'global/infra/http/routes'
import { monitoringInit, monitoringErrorHandler } from 'global/infra/monitoring'

const app = express()

monitoringInit(app)

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(monitoringErrorHandler())

export { app }
