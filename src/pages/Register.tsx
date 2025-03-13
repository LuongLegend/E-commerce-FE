import { Flex, Typography, Form, Input, Checkbox, Button, Space, message } from 'antd'
import { Link, useNavigate } from 'react-router'

import callApi from '../utils/callApi'
import { useContext } from 'react'
import { AppContext } from '../App'

type RegisterFormType = {
  username: string
  email: string
  password: string
  confirmPassword: string
  agree: boolean
}

const Register = () => {
  const [form] = Form.useForm()
  const [messageApi, contextHolder] = message.useMessage()
  const appContext = useContext(AppContext)
  const navigate = useNavigate()
  const { Title } = Typography

  const handleRegister = async (values: RegisterFormType) => {
    const { agree } = values
    if (!agree) {
      messageApi.warning('You need to agree with our policy!')
      return
    }
    const result = await callApi('/user/register', 'POST', values)
    if (result && result.status === 1) {
      messageApi.success('Register success!')
      setTimeout(() => {
        navigate('/login')
      }, 1000)
      return
    }
    if (result && result.status === 0) {
      const msgErr = result.msg || 'Register failed! Please try again'
      messageApi.error(msgErr)
    }
  }

  return (
    <div>
      {contextHolder}
      <Flex justify='center' align='center'>
        <Flex justify='center' align='center' vertical>
          <Title level={1}>Create an Account</Title>
          <p>
            Already have an account? <Link to='/login'>Log in instead!</Link>
          </p>
          <Form form={form} onFinish={handleRegister} initialValues={{ agree: false }}>
            <Flex vertical gap={'small'}>
              <Form.Item
                name='username'
                rules={[
                  { required: true, message: 'Please input!' },
                  { min: 6, message: 'At least 6 characters' }
                ]}
              >
                <Input placeholder='Username' size='large' />
              </Form.Item>
              <Form.Item
                name='email'
                rules={[
                  { required: true, message: 'Please input!' },
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!'
                  }
                ]}
              >
                <Input placeholder='Email' name='email' size='large' />
              </Form.Item>
              <Form.Item
                name='password'
                rules={[
                  { required: true, message: 'Please input!' },
                  { min: 6, message: 'At least 6 characters' }
                ]}
              >
                <Input type='password' placeholder='Password' size='large' />
              </Form.Item>
              <Form.Item
                name='confirmPassword'
                dependencies={['password']}
                rules={[
                  { required: true, message: 'Please input!' },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve()
                      }
                      return Promise.reject(new Error('The new password that you entered do not match!'))
                    }
                  })
                ]}
              >
                <Input type='password' placeholder='Confirm Password' size='large' />
              </Form.Item>

              <Form.Item name='agree' valuePropName='checked' rules={[{ required: true, message: 'Please check!' }]}>
                <Checkbox name='agree'>
                  <Space>
                    I agree to terms & Policy. <Link to='policy'>Learn more</Link>
                  </Space>
                </Checkbox>
              </Form.Item>

              <Button type='primary' htmlType='submit' size='large'>
                Submit & Register
              </Button>
            </Flex>
          </Form>
        </Flex>
      </Flex>
    </div>
  )
}

export default Register
