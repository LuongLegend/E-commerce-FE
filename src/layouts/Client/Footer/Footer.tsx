import { Card, Flex, Typography } from 'antd'
import { Link } from 'react-router'
import { CustomerServiceOutlined, HomeOutlined, PhoneOutlined, SendOutlined } from '@ant-design/icons'
import icon from '~/assets/icon.svg'

const { Title } = Typography
const Footer = () => {
  return (
    <Flex justify='space-between' flex={3} className='footer' align='stretch'>
      <Card style={{ marginRight: 50 }} styles={{ body: { paddingLeft: 0 } }} variant='borderless'>
        <Flex vertical gap={'middle'} style={{ opacity: 0.8 }}>
          <img src={icon} alt='icon' />
          Awesome grocery store website template
          <div>
            <HomeOutlined />
            {` `}
            <b>Address:</b> 5171 W Campbell Ave undefined Kent, Utah 53127 United States
          </div>
          <div>
            <PhoneOutlined />
            {` `}
            <b>Call Us:</b>(+91) - 540-025-124553
          </div>
          <div>
            <SendOutlined />
            {` `}
            <b>Email:</b>sale@Nest.com
          </div>
          <div>
            <CustomerServiceOutlined />
            {` `}
            <b>Hours:</b>10:00 - 18:00, Mon - Sat
          </div>
        </Flex>
      </Card>
      <Card style={{ width: '100%' }} variant='borderless'>
        <Title level={4}>Company</Title>
        <Flex vertical gap={'small'}>
          <Link to='#'>About us</Link>
          <Link to='#'>Delivery Information</Link>
          <Link to='#'>Privacy Policy</Link>
          <Link to='#'>Term & Conditions</Link>
          <Link to='#'>Contact us</Link>
          <Link to='#'>Support center</Link>
          <Link to='#'>Career</Link>
        </Flex>
      </Card>
      <Card style={{ width: '100%' }} variant='borderless'>
        <Title level={4}>Account</Title>
        <Flex vertical gap={'small'}>
          <Link to='#'>Sign in</Link>
          <Link to='#'>View cart</Link>
          <Link to='#'>My wishlist</Link>
          <Link to='#'>Track my order</Link>
          <Link to='#'>Help ticket</Link>
          <Link to='#'>Shipping details</Link>
          <Link to='#'>Compare product</Link>
        </Flex>
      </Card>
      <Card style={{ width: '100%' }} variant='borderless'>
        <Title level={4}>Corporate</Title>
        <Flex vertical gap={'small'}>
          <Link to='#'>Become a vendor</Link>
          <Link to='#'>Affiliate Program</Link>
          <Link to='#'>Farm Business</Link>
          <Link to='#'>Farm Careers</Link>
          <Link to='#'>Our Suppliers</Link>
          <Link to='#'>Accessibility</Link>
          <Link to='#'>Promotions</Link>
        </Flex>
      </Card>
      <Card style={{ width: '100%' }} variant='borderless'>
        <Title level={4}>Popular</Title>
        <Flex vertical gap={'small'}>
          <Link to='#'>Milk & Flavoured Milk</Link>
          <Link to='#'>Butter and Margarine</Link>
          <Link to='#'>Eggs Substitutes</Link>
          <Link to='#'>Marmalades</Link>
          <Link to='#'>Sour Cream and Dips</Link>
          <Link to='#'>Tea & Kombucha</Link>
          <Link to='#'>Cheese</Link>
        </Flex>
      </Card>
    </Flex>
  )
}

export default Footer
