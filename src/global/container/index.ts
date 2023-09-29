import { container } from 'tsyringe'

import { AdminRepository } from '@modules/admin/repository'
import { AccessRepository } from '@modules/access/repository'

export enum Injection {
  AdminRepository = 'AdminRepository',
  AccessRepository = 'AccessRepository',
}

container.registerSingleton<Repository.Admin.Methods>(
  Injection.AdminRepository,
  AdminRepository,
)
container.registerSingleton<Repository.Access.Methods>(
  Injection.AccessRepository,
  AccessRepository,
)
