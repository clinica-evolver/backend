import { container } from 'tsyringe'

import { AdminRepository } from '@modules/admin/repository'
import { AccessRepository } from '@modules/access/repository'
import { EmployeeRepository } from '@modules/employee/repository'

export enum Injection {
  AdminRepository = 'AdminRepository',
  AccessRepository = 'AccessRepository',
  EmployeeRepository = 'EmployeeRepository',
}

container.registerSingleton<Repository.Admin.Methods>(
  Injection.AdminRepository,
  AdminRepository,
)
container.registerSingleton<Repository.Access.Methods>(
  Injection.AccessRepository,
  AccessRepository,
)
container.registerSingleton<Repository.Employee.Methods>(
  Injection.EmployeeRepository,
  EmployeeRepository,
)
