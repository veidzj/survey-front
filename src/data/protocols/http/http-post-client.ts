import { HttpResponse } from '@/data/protocols/http'

export type HttpPostParams<T> = {
  url: string
  body?: T
}

export interface HttpPostClient<T, R> {
  post (data: HttpPostParams<T>): Promise<HttpResponse<R>>
}
