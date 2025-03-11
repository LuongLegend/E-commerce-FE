import { useContext } from 'react'
import { Button, Flex, Form, Input, Typography, message } from 'antd'
import { Link, useLocation, useNavigate } from 'react-router'

import loginImg from '~/assets/login.png'
import callApi from '../utils/callApi'
import { AppContext } from '../App'

const { Title } = Typography
type LoginForm = {
  username: string
  password: string
}

const Login = () => {
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const location = useLocation()
  const appContext = useContext(AppContext)
  const [messageApi, contextHolder] = message.useMessage()

  const onSubmitLogin = async ({ username, password }: LoginForm) => {
    const data = {
      username,
      password
    }
    const result = await callApi('/login', 'POST', data)
    if (result && result.status === 0) {
      const { msg } = result
      messageApi.error(msg)
    }
    if (result && result.status === 1) {
      messageApi.success('Login successfully!')
      appContext?.setUser({ loggedIn: true })
      console.log(location.state)
      navigate('/')
      if (location.state?.from) {
        navigate(location.state.from)
      }
      console.log(result)
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
                    min: 5,
                    message: 'At least 5 characters'
                  }
                ]}
              >
                <Input placeholder='Username or email' />
              </Form.Item>
              <Form.Item name='password' rules={[{ required: true, message: 'Please input!' }]}>
                <Input type='password' placeholder='Password' />
              </Form.Item>
              <Form.Item>
                <Button type='primary' htmlType='submit'>
                  Login
                </Button>
              </Form.Item>
            </Flex>
          </Form>
        </Flex>
      </Flex>
    </div>
  )
}

export default Login
