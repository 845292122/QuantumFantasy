import service from '.'
import type { UserType } from '@qf/schema'

const baseURL = '/user'

const create = (data: UserType.Info) => service.post(`${baseURL}/create`, data)
const modify = (data: UserType.Info) => service.post(`${baseURL}/modify`, data)
const remove = (id: number) => service.post(`${baseURL}/remove/${id}`)
const page = (params: UserType.PageParam) =>
  service.get<CommonType.PageResult<UserType.Info>>(`${baseURL}/page`, { params })
const info = (id: number) => service.get<UserType.Info>(`${baseURL}/info/${id}`)

export const userApi = {
  create,
  modify,
  remove,
  page,
  info
}
