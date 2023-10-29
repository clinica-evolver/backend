import { inject, injectable } from 'tsyringe'

import { Injection } from 'global/container'

@injectable()
export class ListPatientUseCase implements UseCase.Methods {
  constructor(
    @inject(Injection.PatientRepository)
    private patientRepository: Repository.Patient.Methods,
  ) {}

  async execute(): Promise<void> {
    return this.patientRepository.list()
  }
}
