import { inject, injectable } from 'tsyringe'

import { Injection } from 'global/container'

@injectable()
export class DeleteEmployeeUseCase implements UseCase.Methods {
  constructor(
    @inject(Injection.EmployeeRepository)
    private employeeRepository: Repository.Employee.Methods,
  ) {}

  async execute(id: string): Promise<void> {
    const user = await this.employeeRepository.findEmployeeById(id)

    if (!user) throw new Error('Employee not found')

    await this.employeeRepository.delete(id)
  }
}
