import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { z } from 'zod'

import { LoginUseCase } from 'modules/login/use-case/login-use-case'

const requestSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(255),
})

export class LoginController implements Controller.Methods {
  async handle(request: Request, response: Response): Promise<Response> {
    const payload = request.body as UseCase.Login.LoginParams

    const resultValidation = requestSchema.safeParse(payload)

    if (!resultValidation.success) {
      return response.status(400).json(resultValidation.error)
    }

    const loginUseCase = container.resolve(LoginUseCase)

    try {
      const result = await loginUseCase.execute(payload)
      return response.status(201).json(result)
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ message: error.message })
      }

      return response.status(500).json({ message: 'Internal server error' })
    }
  }
}
