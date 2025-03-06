import { useState } from 'react';
import { Link } from 'react-router';
import { Badge } from 'antd';
import { HeartOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';

import icon from '~/assets/icon.svg';
import './Header.css';

const Header = () => {
    const [searchValue, setSearchValue] = useState('');
    const onSearchBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value);
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
                <div>
                    <UserOutlined />
                    Account
                </div>
            </div>
        </div>
    );
};

export default Header;
