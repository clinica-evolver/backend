import { container } from 'tsyringe'
import { Request, Response } from 'express'
import { z } from 'zod'

import { CreateAdminUseCase } from '../../use-case/create-admin'

const requestSchema = z.object({
  name: z.string().min(3).max(255),
  email: z.string().email(),
  dateBirth: z.string(),
  password: z.string().min(6).max(255),
  gender: z.custom<'male' | 'female'>(),
  phone: z.string(),
  access: z.number().min(1).max(1),
  address: z.string().min(3).max(255),
  role: z.string(),
  descriptionRole: z.string().min(3).max(255),
  registerCode: z.string(),
})

export class CreateAdminController implements Controller.Methods {
  async handle(request: Request, response: Response): Promise<Response> {
    const payload = request.body as Repository.Admin.CreateAdminParams
    const resultValidation = requestSchema.safeParse(payload)

    if (!resultValidation.success) {
      return response.status(400).json(resultValidation.error)
    }

    const createUserUseCase = container.resolve(CreateAdminUseCase)

    try {
      const user = await createUserUseCase.execute(payload)
      return response.status(201).json(user)
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ message: error.message })
      }

      return response.status(500).json({ message: 'Internal server error' })
    }
  }
}
