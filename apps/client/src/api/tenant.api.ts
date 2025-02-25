import service from '.'
import { TenantType } from '@qf/schema'

const baseURL = '/tenant'

const create = (data: TenantType.Info) => service.post(`${baseURL}/create`, data)
const modify = (data: TenantType.Info) => service.post(`${baseURL}/modify`, data)
const remove = (id: number) => service.post(`${baseURL}/remove/${id}`)
const page = (params: TenantType.PageParam) =>
  service.get<CommonType.PageResult<TenantType.Info>>(`${baseURL}/page`, { params })
const info = (id: number) => service.get<TenantType.Info>(`${baseURL}/info/${id}`)

export const tenantApi = {
  create,
  modify,
  remove,
  page,
  info
}
