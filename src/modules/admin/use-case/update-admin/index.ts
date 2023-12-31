import { inject, injectable } from 'tsyringe'

import { Injection } from 'global/container'
import { Admin } from '@prisma/client'
import { hashPassword } from 'global/helpers/hash'

@injectable()
export class UpdateAdminUseCase implements UseCase.Methods {
  constructor(
    @inject(Injection.AdminRepository)
    private adminRepository: Repository.Admin.Methods,
  ) {}

  async execute(params: Repository.Admin.UpdateAdminParams): Promise<Admin> {
    const user = await this.adminRepository.findAdminById(params.id)

    if (!user) throw new Error('Admin not found')

    const userData = {
      id: params.id,
      email: params.email,
      phone: params.phone,
      access: params.access,
      role: params.role,
      descriptionRole: params.descriptionRole,
      address: params.address,
    }

    if (params.password) {
      Object.assign(userData, { password: await hashPassword(params.password) })
    }

    return this.adminRepository.update(userData)
  }
}
