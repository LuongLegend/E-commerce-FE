import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { jwtDecode } from 'jwt-decode'
import { CredentialResponse, GoogleLogin } from '@react-oauth/google'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Button, Flex, Form, Input, Typography, message } from 'antd'

import loginImg from '~/assets/login.png'
import { fetchLoginUser, fetchLoginGg } from '../store/slices/userSlice'
import { AppDispatch, RootState } from '../store/store'

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
  const dispatch = useDispatch<AppDispatch>()
  const user = useSelector((state: RootState) => state.user)
  const { error, loggedIn } = user
  const [messageApi, contextHolder] = message.useMessage()

  useEffect(() => {
    if (error) {
      messageApi.error(error)
    }
  }, [error])

  useEffect(() => {
    if (loggedIn) {
      const navigateTo = location.state?.from ? location.state.from : '/'
      navigate(navigateTo)
    }
  }, [loggedIn])

  const onSubmitLogin = async ({ username, password }: LoginForm) => {
    const data = {
      username,
      password
    }

    dispatch(fetchLoginUser(data))
  }

  const handleGGLogin = async ({ credential }: CredentialResponse) => {
    if (credential) {
      const decodedCredential: GoogleResponseType = jwtDecode(credential)
      const { email, name, picture, sub } = decodedCredential
      const data = { email, name, picture, ggId: sub }
      dispatch(fetchLoginGg(data))
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
