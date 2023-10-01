import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { z } from 'zod'

import { CreateAccessUseCase } from '../../use-case/create-access'

const requestSchema = z.object({
  name: z.string(),
  level: z.number(),
})

export class CreateAccessController implements Controller.Methods {
  async handle(request: Request, response: Response): Promise<Response> {
    const payload = request.body as Repository.Access.CreateAccessParams
    const resultValidation = requestSchema.safeParse(payload)

    if (!resultValidation.success) {
      return response.status(400).json(resultValidation.error)
    }

    const createAccessUseCase = container.resolve(CreateAccessUseCase)

    const access = await createAccessUseCase.execute(payload)

    return response.status(201).json(access)
  }
}
