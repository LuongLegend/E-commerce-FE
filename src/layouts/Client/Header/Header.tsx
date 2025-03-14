import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Badge, Popover } from 'antd'
import { HeartOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'

import icon from '~/assets/icon.svg'
import './Header.css'
import AccountItems from './AccountItems'
import { useAuth } from '../../../ProtectedRoute'

const Header = () => {
  const [searchValue, setSearchValue] = useState('')
  const [isHoverAccount, setIsHoverAccount] = useState(false)
  const isAuth = useAuth()
  const navigate = useNavigate()
  const onSearchBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)
  const handleAccountClick = () => {
    if (!isAuth) {
      navigate('/login')
    }
  }
  const handleHoverChange = (open: boolean) => {
    setIsHoverAccount(open)
    if(!isAuth) {
      setIsHoverAccount(false);
    }
  }
  return (
    <div className='header'>
      <Link to={'/'}>
        <img src={icon} alt='product' className='header-logo' />
      </Link>
      <div className='search-box-container'>
        <input
          placeholder='Search'
          className='search-box'
          type='search'
          value={searchValue}
          onChange={onSearchBoxChange}
        />
      </div>
      <div className='action-button'>
        <div>
          <Badge count={0} showZero>
            <HeartOutlined className='header-action-icon' />
          </Badge>
          Wishlist
        </div>
        <div>
          <Badge count={0} showZero>
            <ShoppingCartOutlined />
          </Badge>
          Cart
        </div>
        <Popover content={<AccountItems handleOpen={setIsHoverAccount} />} open={isHoverAccount} arrow={false} onOpenChange={handleHoverChange}>
          <div onClick={handleAccountClick}>
            <UserOutlined />
            Account
          </div>
        </Popover>
      </div>
    </div>
  )
}

export default Header
