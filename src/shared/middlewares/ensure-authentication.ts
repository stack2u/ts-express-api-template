import { NextFunction, Request, Response } from 'express'

import { env } from '@shared/environments/env'
import { responseFormat } from '@shared/utils/response-format'
import jwt from 'jsonwebtoken'

const ensureAuthentication = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    response.status(401).json(
      responseFormat({
        statusCode: 401,
        message: 'token not provided',
      }),
    )
  } else {
    try {
      const tokenWithoutBearer = authHeader.split(' ')[1]

      jwt.verify(tokenWithoutBearer, env.JWT_SECRET, (err, decoded) => {
        if (err) {
          return response.status(401).json(
            responseFormat({
              statusCode: 401,
              message: 'invalid token',
            }),
          )
        }

        // Token válido, continuar a requisição
        // request.user = decoded // Aqui você pode passar as informações do usuário decodificado
        next()
      })
    } catch (err: any) {
      return response.status(401).json(
        responseFormat({
          statusCode: 401,
          message: err.message,
        }),
      )
    }
  }
}

export { ensureAuthentication }
