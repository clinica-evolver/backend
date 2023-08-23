declare namespace Controller {
  interface Methods {
    handle(request: any, response: any): Promise<any>
  }
}
