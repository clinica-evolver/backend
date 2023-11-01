import { Patient } from '@prisma/client'

import { prisma } from 'global/infra/database'

export class PatientRepository implements Repository.Patient.Methods {
  async update(
    params: Repository.Patient.UpdatePatientParams,
  ): Promise<Patient> {
    return prisma.patient.update({
      where: { id: params.id },
      data: {
        accessId: params.access,
        address: params.address,
        email: params.email,
        password: params.password,
        phone: params.phone,
      },
    })
  }

  async delete(id: string): Promise<void> {
    await prisma.patient.delete({ where: { id } })
  }

  async findPatientById(id: string): Promise<Patient | null> {
    return prisma.patient.findUnique({ where: { id } })
  }

  async findPatientByEmail(email: string): Promise<Patient | null> {
    return prisma.patient.findUnique({
      where: { email },
    })
  }

  async list(): Promise<Patient[]> {
    return prisma.patient.findMany()
  }

  async create(
    params: Repository.Patient.CreatePatientParams,
  ): Promise<Patient> {
    return prisma.patient.create({
      data: {
        address: params.address,
        email: params.email,
        password: params.password,
        name: params.name,
        dateBirth: params.dateBirth,
        gender: params.gender,
        phone: params.phone,
        accessId: params.access,
        updatedAt: new Date(),
      },
    })
  }
}
