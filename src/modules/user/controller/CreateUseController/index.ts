import { container } from 'tsyringe'
import { Request, Response } from 'express'

import { CreateUserUseCase } from '../../../user/useCase/createUser'

export class CreateUserController implements Controller.Methods {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, name } = request.body

    const createUserUseCase = container.resolve(CreateUserUseCase)
    const user = await createUserUseCase.execute({ email, name })

    return response.status(201).json(user)
  }
}
