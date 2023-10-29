import { container } from 'tsyringe'
import { Request, Response } from 'express'

import { ListEmployeeUseCase } from 'modules/employee/use-case/list-employee'

export class ListEmployeeController implements Controller.Methods {
  async handle(request: Request, response: Response): Promise<Response> {
    const listEmployeeUseCase = container.resolve(ListEmployeeUseCase)

    try {
      const users = await listEmployeeUseCase.execute()
      return response.status(200).json(users)
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ message: error.message })
      }

      return response.status(500).json({ message: 'Internal server error' })
    }
  }
}
