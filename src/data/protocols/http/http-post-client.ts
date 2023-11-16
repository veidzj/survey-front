import { HttpResponse } from './http-response'

export type HttpPostParams = {
  url: string
  body?: object
}

export interface HttpPostClient {
  post (data: HttpPostParams): Promise<HttpResponse>
}
