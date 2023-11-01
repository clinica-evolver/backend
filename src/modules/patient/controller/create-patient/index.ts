import { container } from 'tsyringe'
import { Request, Response } from 'express'
import { z } from 'zod'

import { CreatePatientUseCase } from '../../use-case/create-patient'

const requestSchema = z.object({
  name: z.string().min(3).max(255),
  email: z.string().email(),
  dateBirth: z.string(),
  password: z.string().min(6).max(255),
  gender: z.custom<'male' | 'female'>(),
  phone: z.string(),
  address: z.string().min(3).max(255),
  access: z.number(),
})

export class CreatePatientController implements Controller.Methods {
  async handle(request: Request, response: Response): Promise<Response> {
    const payload = request.body as Repository.Patient.CreatePatientParams
    const resultValidation = requestSchema.safeParse(payload)

    if (!resultValidation.success) {
      return response.status(400).json(resultValidation.error)
    }

    const createPatientUseCase = container.resolve(CreatePatientUseCase)

    try {
      const user = await createPatientUseCase.execute(payload)
      return response.status(201).json(user)
    } catch (error) {
      if (error instanceof Error) {
        console.log(error)

        return response.status(400).json({ message: error.message })
      }

      return response.status(500).json({ message: 'Internal server error' })
    }
  }
}
