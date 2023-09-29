import { inject, injectable } from 'tsyringe'

import { Injection } from 'global/container'

@injectable()
export class ListAdminUseCase implements UseCase.Methods {
  constructor(
    @inject(Injection.AdminRepository)
    private adminRepository: Repository.Admin.Methods,
  ) {}

  async execute(): Promise<void> {
    return this.adminRepository.list()
  }
}
