declare namespace Repository {
  namespace User {
    interface CreateUserParams {
      email: string
      name: string
    }

    interface Methods {
      createUser(params: CreateUserParams): Promise<any>
      findUserByEmail(email: string): Promise<any>
    }
  }
}
