import { inject, injectable } from 'tsyringe'
import { Patient } from '@prisma/client'

import { Injection } from 'global/container'
import { hashPassword } from 'global/helpers/hash'

@injectable()
export class CreatePatientUseCase implements UseCase.Methods {
  constructor(
    @inject(Injection.PatientRepository)
    private patientRepository: Repository.Patient.Methods,
  ) {}

  async execute(
    params: Repository.Patient.CreatePatientParams,
  ): Promise<Patient> {
    console.log(params)

    const userAlreadyExists = await this.patientRepository.findPatientByEmail(
      params.email,
    )

    if (userAlreadyExists) {
      throw new Error('Patient already exists')
    }

    const userData = {
      ...params,
      password: await hashPassword(params.password),
    }

    return this.patientRepository.create(userData)
  }
}
