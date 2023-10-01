import { Admin } from '@prisma/client'

import { prisma } from 'global/infra/database'

export class AdminRepository implements Repository.Admin.Methods {
  async update(params: Repository.Admin.UpdateAdminParams): Promise<Admin> {
    return prisma.admin.update({
      where: { id: params.id },
      data: {
        accessId: params.access,
        address: params.address,
        email: params.email,
        password: params.password,
        phone: params.phone,
        role: params.role,
        descriptionRole: params.descriptionRole,
      },
    })
  }

  async delete(id: string): Promise<void> {
    await prisma.admin.delete({ where: { id } })
  }

  async findAdminById(id: string): Promise<Admin | null> {
    return prisma.admin.findUnique({ where: { id } })
  }

  async findAdminByEmail(email: string): Promise<Admin | null> {
    return prisma.admin.findUnique({
      where: { email },
    })
  }

  async list(): Promise<Admin[]> {
    return prisma.admin.findMany()
  }

  async create(params: Repository.Admin.CreateAdminParams): Promise<Admin> {
    return prisma.admin.create({
      data: {
        accessId: params.access,
        address: params.address,
        email: params.email,
        password: params.password,
        name: params.name,
        dateBirth: params.dateBirth,
        gender: params.gender,
        phone: params.phone,
        role: params.role,
        registerCode: params.registerCode,
      },
    })
  }
}
