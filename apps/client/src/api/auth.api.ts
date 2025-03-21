import service from '.'

const baseURL = '/auth'

const login = (data: any) => service.post(`${baseURL}/login`, data)
const getInfo = (id: number) => service.get(`${baseURL}/info/${id}`)

const authApi = {
  login,
  getInfo
}

export { authApi }
