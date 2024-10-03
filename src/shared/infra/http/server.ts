import express, {
  Request,
  Response,
  ErrorRequestHandler,
  NextFunction,
} from 'express'
import cors from 'cors'
import { AppError } from '@shared/helpers/errors/AppError'

import routes from '../routes'

import { logger } from '@shared/helpers/logger'
import { env } from '@shared/environments/env'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/health', (_: Request, response: Response) => {
  logger.debug('Health Check')

  response.status(200).json({
    status: 200,
    message: 'App ONLINE',
  })
})

app.use(routes)

app.use(
  (err: Error, _request: Request, response: Response, _: NextFunction) => {
    if (err instanceof AppError) {
      response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      })
    }

    response.status(500).json({
      status: 'error',
      message: err.message,
    })
  },
)

app.listen(3333, () => {
  logger.info(`API rodando na porta ${env.PORT}`)
})
