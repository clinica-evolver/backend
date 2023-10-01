import { inject, injectable } from 'tsyringe'

import { Injection } from 'global/container'

@injectable()
export class DeleteAdminUseCase implements UseCase.Methods {
  constructor(
    @inject(Injection.AdminRepository)
    private adminRepository: Repository.Admin.Methods,
  ) {}

  async execute(id: string): Promise<void> {
    const user = await this.adminRepository.findAdminById(id)

    if (!user) throw new Error('Admin not found')

    await this.adminRepository.delete(id)
  }
}
