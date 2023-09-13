import { container } from 'tsyringe'

import { UserRepository } from 'modules/user/repository'

export enum Injection {
  UserRepository = 'UserRepository',
}

container.registerSingleton<Repository.User.Methods>(
  Injection.UserRepository,
  UserRepository,
)
