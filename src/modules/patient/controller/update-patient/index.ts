import { container } from 'tsyringe'
import { Request, Response } from 'express'
import { z } from 'zod'

import { UpdatePatientUseCase } from 'modules/patient/use-case/update-patient'

const requestSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  password: z.string().min(6).max(255).optional(),
  phone: z.string(),
  access: z.number(),
  address: z.string().min(3).max(255),
})

export class UpdatePatientController implements Controller.Methods {
  async handle(request: Request, response: Response): Promise<Response> {
    const params = request.body as Repository.Patient.UpdatePatientParams
    const resultValidation = requestSchema.safeParse(params)

    if (!resultValidation.success) {
      return response.status(400).json(resultValidation.error)
    }

    const updatePatientUseCase = container.resolve(UpdatePatientUseCase)

    try {
      const user = await updatePatientUseCase.execute(params)
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
