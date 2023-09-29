import { inject, injectable } from 'tsyringe'
import { Admin } from '@prisma/client'

import { Injection } from 'global/container'

@injectable()
export class CreateAdminUseCase implements UseCase.Methods {
  constructor(
    @inject(Injection.AdminRepository)
    private adminRepository: Repository.Admin.Methods,
  ) {}

  async execute(params: Repository.Admin.CreateAdminParams): Promise<Admin> {
    const user = await this.adminRepository.findAdminByEmail(params.email)

    if (user) throw new Error('Admin already exists')

    return await this.adminRepository.create(params)
  }
}
