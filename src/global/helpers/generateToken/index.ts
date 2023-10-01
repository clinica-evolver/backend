import jwt from 'jsonwebtoken'

export function generateToken(
  params: Helpers.GenerateToken.GenerateTokenParams,
): string {
  return jwt.sign(params.body, String(process.env.JWT_SECRET), {
    expiresIn: process.env.EXPIRES_IN,
  })
}
