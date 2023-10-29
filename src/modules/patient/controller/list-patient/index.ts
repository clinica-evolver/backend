import { container } from 'tsyringe'
import { Request, Response } from 'express'

import { ListPatientUseCase } from 'modules/patient/use-case/list-patient'

export class ListPatientController implements Controller.Methods {
  async handle(request: Request, response: Response): Promise<Response> {
    const listPatientUseCase = container.resolve(ListPatientUseCase)

    try {
      const users = await listPatientUseCase.execute()
      return response.status(200).json(users)
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ message: error.message })
      }

      return response.status(500).json({ message: 'Internal server error' })
    }
  }
}
