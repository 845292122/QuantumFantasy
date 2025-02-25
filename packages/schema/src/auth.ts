import { z } from 'zod'

const login = z.object({
  body: z.object({
    phone: z.coerce.string().min(1, { message: '手机号不能为空' }),
    password: z.coerce.string().min(1, { message: '密码不能为空' })
  })
})

export const AuthSchema = {
  login
}

export namespace AuthType {
  export type Login = z.infer<typeof AuthSchema.login>['body']
}
