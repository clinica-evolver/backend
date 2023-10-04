import { container } from 'tsyringe'
import { Request, Response } from 'express'
import { z } from 'zod'

import { UpdateAdminUseCase } from '@modules/admin/use-case/update-admin'

const requestSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  password: z.string().min(6).max(255).optional(),
  phone: z.string().min(11).max(11),
  access: z.number().min(1).max(1),
  address: z.string().min(3).max(255),
  role: z.string(),
  descriptionRole: z.string().min(3).max(255),
})

export class UpdateAdminController implements Controller.Methods {
  async handle(request: Request, response: Response): Promise<Response> {
    const params = request.body as Repository.Admin.UpdateAdminParams
    const resultValidation = requestSchema.safeParse(params)

    if (!resultValidation.success) {
      return response.status(400).json(resultValidation.error)
    }

    const updateAdminUseCase = container.resolve(UpdateAdminUseCase)

    try {
      const user = await updateAdminUseCase.execute(params)
      return response.status(200).json(user)
    } catch (error) {
      console.log(error)

      if (error instanceof Error) {
        return response.status(400).json({ message: error.message })
      }

      return response.status(500).json({ message: 'Internal server error' })
    }
  }
}
