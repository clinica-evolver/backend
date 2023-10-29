import { container } from 'tsyringe'

import { AdminRepository } from '@modules/admin/repository'
import { AccessRepository } from '@modules/access/repository'
import { EmployeeRepository } from '@modules/employee/repository'
import { PatientRepository } from '@modules/patient/repository'

export enum Injection {
  AdminRepository = 'AdminRepository',
  AccessRepository = 'AccessRepository',
  EmployeeRepository = 'EmployeeRepository',
  PatientRepository = 'PatientRepository',
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
container.registerSingleton<Repository.Patient.Methods>(
  Injection.PatientRepository,
  PatientRepository,
)
