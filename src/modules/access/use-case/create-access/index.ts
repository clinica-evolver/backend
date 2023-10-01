import { Access } from '@prisma/client'
import { Injection } from 'global/container'
import { inject, injectable } from 'tsyringe'

@injectable()
export class CreateAccessUseCase implements UseCase.Methods {
  constructor(
    @inject(Injection.AccessRepository)
    private accessRepository: Repository.Access.Methods,
  ) {}

  async execute(params: Repository.Access.CreateAccessParams): Promise<Access> {
    const hasAccesslevel = await this.accessRepository.findAccessbyLevel(
      params.level,
    )

    if (hasAccesslevel) throw new Error('Access already exists')

    return this.accessRepository.createAccess(params)
  }
}
