import callApi from '../utils/callApi'

type LoginType = {
  username: string
  password: string
}

const loginUser = async (data: LoginType) => {
  const result = await callApi('/user/login', 'POST', data)
  return result
}

export { loginUser }
export type { LoginType }
