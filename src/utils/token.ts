import fs from 'fs'
import jwt from 'jsonwebtoken'
import { join } from 'path';

export function getPrivateKey(): Buffer {
  const keyFile = join(process.cwd(), '/RS256/private.pem')
  const buffer = fs.readFileSync(keyFile)
  return buffer
}

export function generateToken(data: Record<string, any> = {}) {
  return jwt.sign(data, getPrivateKey(), { algorithm: 'RS256', expiresIn: '2d' });
}
