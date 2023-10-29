enum Gender {
  Male = 'male',
  Female = 'female',
}

declare namespace Repository {
  namespace Employee {
    interface CreateEmployeeParams {
      name: string
      email: string
      dateBirth: string
      password: string
      gender: Gender
      phone: string
      access: number
      role: string
      descriptionRole: string
      registerCode: string
      address: string
    }

    interface UpdateEmployeeParams {
      id: string
      email: string
      password?: string
      phone: string
      access: number
      role: string
      descriptionRole: string
      address: string
    }

    interface Methods {
      create(params: CreateEmployeeParams): Promise<any>
      findEmployeeByEmail(email: string): Promise<any>
      findEmployeeById(id: string): Promise<any>
      delete(id: string): Promise<void>
      update(params: UpdateEmployeeParams): Promise<any>
      list(): Promise<any>
    }
  }
}
