import { CustomerServiceOutlined, AppstoreOutlined } from '@ant-design/icons'
import { Button, Flex } from 'antd'
import CustomCascader from '../../../components/CustomCascader'
import './NavigationBar.css'

const shopOptions = [
  {
    value: 'zhejiang',
    label: 'Zhejiang'
  },
  {
    value: 'zhejiang',
    label: 'Zhejiang'
  },
  {
    value: 'zhejiang',
    label: 'Zhejiang'
  },
  {
    value: 'zhejiang',
    label: 'Zhejiang'
  }
]
const NavigationBar = () => {
  return (
    <Flex gap={'large'}>
      <Button type='primary' size='large' style={{ flexGrow: 1 }}>
        <AppstoreOutlined />
        All categories
      </Button>
      <Flex justify='center' gap={'large'} style={{ flexGrow: 6 }}>
        <Button color='primary' size='large' variant='text' className='bold-text'>
          Hot deals
        </Button>
        <Button color='primary' size='large' variant='text' className='bold-text'>
          About
        </Button>
        <Button color='primary' size='large' variant='text' className='bold-text'>
          Shop
        </Button>
        <Button color='primary' size='large' variant='text' className='bold-text'>
          Vendors
        </Button>
        <Button color='primary' size='large' variant='text' className='bold-text'>
          Mega menu
        </Button>
        <Button color='primary' size='large' variant='text' className='bold-text'>
          Blogs
        </Button>
        <Button color='primary' size='large' variant='text' className='bold-text'>
          Contact
        </Button>
      </Flex>
      <Flex gap={'small'}>
        <CustomerServiceOutlined style={{ fontSize: 40 }} />
        <Flex vertical>
          <span className='phone-contact'>1900-888 </span>
          <span className='support-center'>24/7 Support center</span>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default NavigationBar
