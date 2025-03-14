import callApi from '../utils/callApi'

type LoginType = {
  username: string
  password: string
}

type GgLoginType = {
  email: string
  name: string
  picture: string
  ggId: number
}

const loginUser = async (data: LoginType) => {
  const result = await callApi('/user/login', 'POST', data)
  return result
}

const loginGoogle = async (data: GgLoginType) => {
  const result = await callApi('/user/login/gg', 'POST', data)
  return result
}

export { loginUser, loginGoogle }
export type { LoginType, GgLoginType }
