import { Router } from 'express'

import { authRouter } from '@modules/users/infra/routes/auth.routes'

const routes = Router()

routes.use('/login', authRouter)

export default routes
