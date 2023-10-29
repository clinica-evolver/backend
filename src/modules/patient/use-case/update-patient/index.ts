import { inject, injectable } from 'tsyringe'
import { Patient } from '@prisma/client'

import { Injection } from 'global/container'
import { hashPassword } from 'global/helpers/hash'

@injectable()
export class UpdatePatientUseCase implements UseCase.Methods {
  constructor(
    @inject(Injection.PatientRepository)
    private patientRepository: Repository.Patient.Methods,
  ) {}

  async execute(
    params: Repository.Patient.UpdatePatientParams,
  ): Promise<Patient> {
    const user = await this.patientRepository.findPatientById(params.id)

    if (!user) throw new Error('Patient not found')

    const userData = {
      id: params.id,
      email: params.email,
      phone: params.phone,
      access: params.access,
      address: params.address,
    }

    if (params.password) {
      Object.assign(userData, { password: await hashPassword(params.password) })
    }

    return this.patientRepository.update(userData)
  }
}
