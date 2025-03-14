import { SetStateAction, Dispatch } from 'react'
import { Button, Flex } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { EnvironmentOutlined, HeartOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons'

import { useDispatch } from 'react-redux'
import { removeUser } from '../../../store/slices/userSlice'

type AccountItemsProps = {
  handleOpen: Dispatch<SetStateAction<boolean>>
}

const AccountItems = ({ handleOpen }: AccountItemsProps) => {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(removeUser());
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
