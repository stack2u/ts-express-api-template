import { env } from '@env/env'
import bcrypt from 'bcrypt'

async function generateHashPassword(password: string): Promise<string> {
  return await bcrypt.hash(password, env.SALT_RESULT)
}

async function compareHashPasswords(
  password: string,
  hashedPassword: string,
): Promise<boolean> {
  return await bcrypt.compare(password, hashedPassword)
}

export {
  generateHashPassword,
  compareHashPasswords
}
