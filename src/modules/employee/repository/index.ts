import { Employee } from '@prisma/client'

import { prisma } from 'global/infra/database'

export class EmployeeRepository implements Repository.Employee.Methods {
  async update(
    params: Repository.Employee.UpdateEmployeeParams,
  ): Promise<Employee> {
    return prisma.employee.update({
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
    await prisma.employee.delete({ where: { id } })
  }

  async findEmployeeById(id: string): Promise<Employee | null> {
    return prisma.employee.findUnique({ where: { id } })
  }

  async findEmployeeByEmail(email: string): Promise<Employee | null> {
    return prisma.employee.findUnique({
      where: { email },
    })
  }

  async list(): Promise<Employee[]> {
    return prisma.employee.findMany()
  }

  async create(
    params: Repository.Employee.CreateEmployeeParams,
  ): Promise<Employee> {
    return prisma.employee.create({
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
        descriptionRole: params.descriptionRole,
      },
    })
  }
}
