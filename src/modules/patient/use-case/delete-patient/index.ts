import { inject, injectable } from 'tsyringe'

import { Injection } from 'global/container'

@injectable()
export class DeletePatientUseCase implements UseCase.Methods {
  constructor(
    @inject(Injection.PatientRepository)
    private patientRepository: Repository.Patient.Methods,
  ) {}

  async execute(id: string): Promise<void> {
    const user = await this.patientRepository.findPatientById(id)

    if (!user) throw new Error('Patient not found')

    await this.patientRepository.delete(id)
  }
}
