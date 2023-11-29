import { Admin, Employee } from '@prisma/client'
import { inject, injectable } from 'tsyringe'

import { Injection } from 'global/container'
import { comparePassword } from 'global/helpers/hash'
import { generateToken } from 'global/helpers/generateToken'

@injectable()
export class LoginUseCase implements UseCase.Methods {
  constructor(
    @inject(Injection.AdminRepository)
    private adminRepository: Repository.Admin.Methods,

    @inject(Injection.EmployeeRepository)
    private employeeRepository: Repository.Employee.Methods,
  ) {}

  async execute(
    params: UseCase.Login.LoginParams,
  ): Promise<UseCase.Login.LoginResponse> {
    let user: Admin | Employee

    user = await this.adminRepository.findAdminByEmail(params.email)

    if (!user) {
      user = await this.employeeRepository.findEmployeeByEmail(params.email)
    }

    if (!user) throw new Error('User not found')

    const passwordMatched = await comparePassword({
      password: params.password,
      hashedPassword: user.password,
    })

    if (!passwordMatched) throw new Error('Incorrect password')

    const body = {
      id: user.id,
      email: user.email,
      name: user.name,
      access: user.accessId,
    }

    const token = generateToken({ body })

    return { token }
  }
}
