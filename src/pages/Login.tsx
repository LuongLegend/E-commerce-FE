import { useContext } from 'react'
import { Button, Flex, Form, Input, Typography, message } from 'antd'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { CredentialResponse, GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'

import loginImg from '~/assets/login.png'
import callApi from '../utils/callApi'
import { AppContext } from '../App'

const { Title } = Typography
type LoginForm = {
  username: string
  password: string
}

type GoogleResponseType = {
  email: string
  name: string
  picture: string
  sub: number
}

const Login = () => {
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const location = useLocation()
  const appContext = useContext(AppContext)
  const [messageApi, contextHolder] = message.useMessage()

  const handleLoginSuccess = (token: string) => {
    messageApi.success('Login successfully!')
    appContext?.setUser({ loggedIn: true })
    localStorage.setItem('token', token)
    const navigateTo = location.state?.from ? location.state.from : '/'
    navigate(navigateTo)
  }

  const onSubmitLogin = async ({ username, password }: LoginForm) => {
    const data = {
      username,
      password
    }
    const result = await callApi('/user/login', 'POST', data)
    if (result && result.status === 0) {
      const { msg } = result
      messageApi.error(msg)
    }
    if (result && result.status === 1) {
      const { token } = result
      handleLoginSuccess(token)
    }
  }

  const handleGGLogin = async ({ credential }: CredentialResponse) => {
    if (credential) {
      const decodedCredential: GoogleResponseType = jwtDecode(credential)
      const { email, name, picture, sub } = decodedCredential
      const data = { email, name, picture, ggId: sub }
      const result = await callApi('/user/login/gg', 'POST', data)
      if (result && result.status === 1) {
        const { token } = result
        handleLoginSuccess(token)
      }
      if (result && result.status === 0) {
        const msgErr = result.msg || 'Register failed! Please try again'
        messageApi.error(msgErr)
      }
    }
  }

  return (
    <div>
      {contextHolder}
      <Flex justify='center' align='center'>
        <Flex gap={'large'}>
          <img src={loginImg} alt='image' width={430} />
          <Form form={form} onFinish={onSubmitLogin}>
            <Flex vertical>
              <Title level={1}>Login</Title>
              <span>
                Don't have an account? <Link to={'/register'}>Create here</Link>
              </span>
              <Form.Item
                name='username'
                rules={[
                  { required: true, message: 'Please input!' },
                  {
                    min: 6,
                    message: 'At least 6 characters'
                  }
                ]}
              >
                <Input placeholder='Username or email' />
              </Form.Item>
              <Form.Item name='password' rules={[{ required: true, message: 'Please input!' }]}>
                <Input type='password' placeholder='Password' />
              </Form.Item>
              <Form.Item>
                <Flex gap='middle'>
                  <Button type='primary' htmlType='submit' size='large'>
                    Login
                  </Button>
                  <GoogleLogin
                    onSuccess={handleGGLogin}
                    onError={() => {
                      console.log('Login Failed')
                    }}
                  />
                </Flex>
              </Form.Item>
            </Flex>
          </Form>
        </Flex>
      </Flex>
    </div>
  )
}

export default Login
