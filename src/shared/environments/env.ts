import 'dotenv/config'

import { z } from 'zod'

import { logger } from '@shared/helpers/logger'
import { AppError } from '@errors/AppError'

const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
  PORT: z.coerce.number(),
  DATABASE_URL: z.string(),
  SHADOW_DATABASE_URL: z.string(),
  JWT_SECRET: z.string(),
  JWT_EXPIRES_IN: z.string(),
  SALT_RESULT: z.coerce.number(),
  MAIL_HOST: z.string(),
  MAIL_SECURITY: z.coerce.boolean(),
  MAIL_PORT: z.coerce.number(),
  MAIL_USER: z.string(),
  MAIL_PASS: z.string(),
  MAIL_FROM: z.string(),
  FRONTEND_URL: z.string(),
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
  logger.error('Invalid environment variable', _env.error.format())

  throw new AppError('❌ Invalid environment variables')
}

export const env = _env.data
