import { Button, Flex, Popover } from 'antd'
import { CustomerServiceOutlined, AppstoreOutlined } from '@ant-design/icons'
import { Link } from 'react-router'

import './NavigationBar.css'

interface Option {
  value: string
  label: string
  children?: Option[]
}

const shopOptions = [
  {
    value: 'zhejiang1',
    label: 'Zhejiang1'
  },
  {
    value: 'zhejiang2',
    label: 'Zhejiang2'
  },
  {
    value: 'zhejiang3',
    label: 'Zhejiang3'
  },
  {
    value: 'zhejiang4',
    label: 'Zhejiang4'
  }
]

const venderOptions = [
  {
    value: 'zhejiang1',
    label: 'Zhejiang1'
  },
  {
    value: 'zhejiang2',
    label: 'Zhejiang2'
  },
  {
    value: 'zhejiang3',
    label: 'Zhejiang3'
  },
  {
    value: 'zhejiang4',
    label: 'Zhejiang4'
  }
]

const optionsContent = (options: Option[]) => (
  <Flex vertical style={{ width: 200 }} gap={'middle'}>
    {options.map(({ value, label }) => (
      <Link to={`/shop/${value}`} key={value} className={'option-link bold-text'}>
        {label}
      </Link>
    ))}
  </Flex>
)

const NavigationBar = () => {
  return (
    <Flex gap={'large'}>
      <Button type='primary' size='large' style={{ flexGrow: 1 }}>
        <AppstoreOutlined />
        All categories
      </Button>
      <Flex justify='center' gap={'large'} style={{ flexGrow: 6 }}>
        <Button color='primary' size='large' variant='text' className='bold-text '>
          Hot deals
        </Button>
        <Link to={'/about'}>
          <Button color='primary' size='large' variant='text' className='bold-text'>
            About
          </Button>
        </Link>
        <Popover content={optionsContent(shopOptions)} arrow={false} placement='bottomLeft'>
          <Button color='primary' size='large' variant='text' className='bold-text'>
            Shop
          </Button>
        </Popover>
        <Popover content={optionsContent(venderOptions)} arrow={false} placement='bottomLeft'>
          <Button color='primary' size='large' variant='text' className='bold-text'>
            Vendors
          </Button>
        </Popover>
        <Button color='primary' size='large' variant='text' className='bold-text'>
          Mega menu
        </Button>
        <Link to={'/blogs'}>
          <Button color='primary' size='large' variant='text' className='bold-text'>
            Blogs
          </Button>
        </Link>
        <Link to={'/contact'}>
          <Button color='primary' size='large' variant='text' className='bold-text'>
            Contact
          </Button>
        </Link>
      </Flex>
      <Flex gap={'small'}>
        <CustomerServiceOutlined style={{ fontSize: 40 }} />
        <Flex vertical>
          <a href='tel:1900-888' className='phone-contact'>
            1900-888
          </a>
          <span className='support-center'>24/7 Support center</span>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default NavigationBar
