import { inject, injectable } from 'tsyringe'
import { Employee } from '@prisma/client'

import { Injection } from 'global/container'
import { hashPassword } from 'global/helpers/hash'

@injectable()
export class UpdateEmployeeUseCase implements UseCase.Methods {
  constructor(
    @inject(Injection.EmployeeRepository)
    private employeeRepository: Repository.Employee.Methods,
  ) {}

  async execute(
    params: Repository.Employee.UpdateEmployeeParams,
  ): Promise<Employee> {
    const user = await this.employeeRepository.findEmployeeById(params.id)

    if (!user) throw new Error('Employee not found')

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

    return this.employeeRepository.update(userData)
  }
}
