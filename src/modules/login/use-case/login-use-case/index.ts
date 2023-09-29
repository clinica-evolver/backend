import { inject, injectable } from 'tsyringe'

import { Injection } from 'global/container'
import { comparePassword } from 'global/helpers/hash'
import { generateToken } from 'global/helpers/generateToken'

@injectable()
export class LoginUseCase implements UseCase.Methods {
  constructor(
    @inject(Injection.AdminRepository)
    private adminRepository: Repository.Admin.Methods,
  ) {}

  async execute(
    params: UseCase.Login.LoginParams,
  ): Promise<UseCase.Login.LoginResponse> {
    const user = await this.adminRepository.findAdminByEmail(params.email)

    if (!user) throw new Error('Admin not found')

    const passwordMatched = await comparePassword({
      password: params.password,
      hashedPassword: user.password,
    })

    if (!passwordMatched) throw new Error('Incorrect password')

    const body = { id: user.id }

    const token = generateToken({ body })

    return { token }
  }
}
