import { useState } from 'react'
import './Header.css'
import icon from '../../../public/icon.svg'
const Header = () => {
    const [searchValue, setSearchValue] = useState('');
    const onSearchBoxChange = (e) => setSearchValue(e.target.value);
    return (
        <div className="header">
            <img src={icon} alt="product" className='header-logo' />
            <div className="search-box-container">
                <input placeholder="Search" className="search-box" type='search' value={searchValue} onChange={onSearchBoxChange} />
            </div>
            Header

        </div>
    )
}

export default Header