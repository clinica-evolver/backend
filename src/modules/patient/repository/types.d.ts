enum Gender {
  Male = 'male',
  Female = 'female',
}

declare namespace Repository {
  namespace Patient {
    interface CreatePatientParams {
      name: string
      email: string
      dateBirth: string
      password: string
      gender: Gender
      phone: string
      address: string
      access: number
    }

    interface UpdatePatientParams {
      id: string
      email: string
      password?: string
      phone: string
      access: number
      address: string
    }

    interface Methods {
      create(params: CreatePatientParams): Promise<any>
      findPatientByEmail(email: string): Promise<any>
      findPatientById(id: string): Promise<any>
      delete(id: string): Promise<void>
      update(params: UpdatePatientParams): Promise<any>
      list(): Promise<any>
    }
  }
}
