import { container } from 'tsyringe'
import { Request, Response } from 'express'

import { ListAdminUseCase } from '@modules/admin/use-case/list-admin'

export class ListAdminController implements Controller.Methods {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAdminUseCase = container.resolve(ListAdminUseCase)

    try {
      const users = await listAdminUseCase.execute()
      return response.status(200).json(users)
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ message: error.message })
      }

      return response.status(500).json({ message: 'Internal server error' })
    }
  }
}
