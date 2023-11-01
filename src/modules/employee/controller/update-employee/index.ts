import { container } from 'tsyringe'
import { Request, Response } from 'express'
import { z } from 'zod'

import { UpdateEmployeeUseCase } from 'modules/employee/use-case/update-employee'

const requestSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  password: z.string().min(6).max(255).optional(),
  phone: z.string(),
  access: z.number(),
  address: z.string().min(3).max(255),
  role: z.string(),
  descriptionRole: z.string().min(3).max(255),
})

export class UpdateEmployeeController implements Controller.Methods {
  async handle(request: Request, response: Response): Promise<Response> {
    const params = request.body as Repository.Admin.UpdateAdminParams
    const resultValidation = requestSchema.safeParse(params)

    if (!resultValidation.success) {
      return response.status(400).json(resultValidation.error)
    }

    const updateEmployeeUseCase = container.resolve(UpdateEmployeeUseCase)

    try {
      const user = await updateEmployeeUseCase.execute(params)
      return response.status(200).json(user)
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ message: error.message })
      }

      return response.status(500).json({ message: 'Internal server error' })
    }
  }
}
