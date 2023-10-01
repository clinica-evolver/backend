import { Access } from '@prisma/client'
import { prisma } from 'global/infra/database'

export class AccessRepository implements Repository.Access.Methods {
  async createAccess(
    params: Repository.Access.CreateAccessParams,
  ): Promise<Access> {
    return prisma.access.create({ data: params })
  }

  async findAccessbyLevel(level: number): Promise<Access | null> {
    return prisma.access.findUnique({ where: { level } })
  }
}
