import { inject, injectable } from 'tsyringe'

import { Injection } from 'global/container'

@injectable()
export class CreateUserUseCase implements UseCase.Methods {
  constructor(
    @inject(Injection.UserRepository)
    private userRepository: Repository.User.Methods,
  ) {}

  async execute({ email, name }: UseCase.User.CreateUserParams): Promise<any> {
    const user = await this.userRepository.findUserByEmail(email)

    if (user) throw new Error('User already exists')

    return await this.userRepository.createUser({ email, name })
  }
}
