import { User } from '@prisma/client'

import { prisma } from 'global/infra/database'

export class UserRepository implements Repository.User.Methods {
  async findUserByEmail(email: string): Promise<User> {
    return prisma.user.findUnique({
      where: { email },
    })
  }

  async createUser({
    email,
    name,
  }: Repository.User.CreateUserParams): Promise<User> {
    return prisma.user.create({
      data: { email, name },
    })
  }
}
