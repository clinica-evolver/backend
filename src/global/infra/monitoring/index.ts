import { Express } from 'express'
import * as Sentry from '@sentry/node'
import { ProfilingIntegration } from '@sentry/profiling-node'

export function monitoringInit(app: Express) {
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    integrations: [
      new Sentry.Integrations.Http({ tracing: true }),
      new Sentry.Integrations.Express({ app }),
      new ProfilingIntegration(),
    ],
    tracesSampleRate: 1.0,
    profilesSampleRate: 1.0,
  })

  app.use(
    Sentry.Handlers.requestHandler({
      user: ['email'],
    }),
  )
  app.use(Sentry.Handlers.tracingHandler())
}

export const monitoringErrorHandler = () => Sentry.Handlers.errorHandler()
