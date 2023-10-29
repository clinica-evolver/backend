import { inject, injectable } from 'tsyringe'

import { Injection } from 'global/container'

@injectable()
export class ListEmployeeUseCase implements UseCase.Methods {
  constructor(
    @inject(Injection.EmployeeRepository)
    private employeeRepository: Repository.Employee.Methods,
  ) {}

  async execute(): Promise<void> {
    return this.employeeRepository.list()
  }
}
