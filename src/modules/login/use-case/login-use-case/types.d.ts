declare namespace UseCase {
  namespace Login {
    interface LoginParams {
      email: string
      password: string
    }

    interface LoginResponse {
      token: string
    }
  }
}
