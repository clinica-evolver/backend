enum Gender {
  Male = 'male',
  Female = 'female',
}

declare namespace Repository {
  namespace Admin {
    interface CreateAdminParams {
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

    interface UpdateAdminParams {
      id: string
      email: string
      password: string
      phone: string
      access: number
      role: string
      descriptionRole: string
      address: string
    }

    interface Methods {
      create(params: CreateAdminParams): Promise<any>
      findAdminByEmail(email: string): Promise<any>
      findAdminById(id: string): Promise<any>
      delete(id: string): Promise<void>
      update(params: UpdateAdminParams): Promise<any>
      list(): Promise<any>
    }
  }
}
