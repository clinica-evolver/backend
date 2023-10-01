declare namespace Repository {
  namespace Access {
    interface CreateAccessParams {
      name: string
      level: number
    }

    interface Methods {
      createAccess(params: CreateAccessParams): Promise<any>
      findAccessbyLevel(level: number): Promise<any>
    }
  }
}
