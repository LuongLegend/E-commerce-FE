import { SetStateAction, useContext, Dispatch, ComponentProps } from 'react'
import { Button, Flex } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { EnvironmentOutlined, HeartOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons'

import { AppContext } from '../../../App'

type AccountItemsProps = {
  handleOpen: Dispatch<SetStateAction<boolean>>
}

const AccountItems = ({ handleOpen }: AccountItemsProps) => {
  const navigate = useNavigate()
  const appContext = useContext(AppContext)
  const handleLogout = () => {
    localStorage.removeItem('token')
    appContext?.setUser({ loggedIn: false })
    handleOpen(false)
    navigate('/')
  }
  return (
    <div>
      <Flex vertical gap={'middle'} justify='flex-start'>
        <Link to='/account'>
          <Button type='text' icon={<UserOutlined />} className='account-item'>
            My Account
          </Button>
        </Link>
        <Link to='/order-tracking'>
          <Button type='text' icon={<EnvironmentOutlined />} className='account-item'>
            Order Tracking
          </Button>
        </Link>
        <Link to='/wishlist'>
          <Button type='text' icon={<HeartOutlined />} className='account-item'>
            My Wishlist
          </Button>
        </Link>

        <Button type='text' icon={<LogoutOutlined />} className='account-item' onClick={handleLogout}>
          Logout
        </Button>
      </Flex>
    </div>
  )
}

export default AccountItems
