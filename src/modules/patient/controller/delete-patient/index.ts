import { container } from 'tsyringe'
import { Request, Response } from 'express'
import { z } from 'zod'

import { DeletePatientUseCase } from 'modules/patient/use-case/delete-patient'

const requestSchema = z.object({
  id: z.string().uuid(),
})

export class DeletePatientController implements Controller.Methods {
  async handle(request: Request, response: Response): Promise<Response> {
    const params = request.params
    const resultValidation = requestSchema.safeParse(params)

    if (!resultValidation.success) {
      return response.status(400).json(resultValidation.error)
    }

    const deletePatientUseCase = container.resolve(DeletePatientUseCase)

    try {
      await deletePatientUseCase.execute(params.id)
      return response.status(200).json()
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ message: error.message })
      }

      return response.status(500).json({ message: 'Internal server error' })
    }
  }
}
