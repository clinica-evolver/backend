import { inject, injectable } from 'tsyringe'
import { Employee } from '@prisma/client'

import { Injection } from 'global/container'
import { hashPassword } from 'global/helpers/hash'

@injectable()
export class CreateEmployeeUseCase implements UseCase.Methods {
  constructor(
    @inject(Injection.EmployeeRepository)
    private employeeRepository: Repository.Employee.Methods,

    @inject(Injection.AdminRepository)
    private adminRepository: Repository.Admin.Methods,
  ) {}

  async execute(
    params: Repository.Employee.CreateEmployeeParams,
  ): Promise<Employee> {
    const userAlreadyExists = await this.employeeRepository.findEmployeeByEmail(
      params.email,
    )

    const usersIsAdmin = await this.adminRepository.findAdminByEmail(
      params.email,
    )

    if (userAlreadyExists || usersIsAdmin) {
      throw new Error('Employee already exists')
    }

    const userData = {
      ...params,
      password: await hashPassword(params.password),
    }

    return await this.employeeRepository.create(userData)
  }
}
