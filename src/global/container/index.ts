import { container } from 'tsyringe'

import { UserRepository } from 'modules/user/repository'
import { CarRepository } from 'modules/car/repository'

export enum Injection {
  UserRepository = 'UserRepository',
  CarRepository = 'CarRepository',
}

container.registerSingleton<Repository.User.Methods>(
  Injection.UserRepository,
  UserRepository,
)

container.registerSingleton<Repository.Car.Methods>(
  Injection.CarRepository,
  CarRepository,
)
