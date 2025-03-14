import { Button, Card, Flex, Space, Typography } from 'antd'
import { getImageUrl } from '../utils/common'
import { HeartOutlined, ShoppingOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

import '~/styles/Product.css'
import { ProductType } from '../types/product'

const ProductCard = ({ product }: { product: ProductType }) => {
  const { id, title, shop, price, slug, frontImg, shopId } = product
  const { Title } = Typography
  return (
    <Card hoverable>
      <Flex vertical style={{ maxWidth: 200 }}>
        {frontImg && <img src={getImageUrl(frontImg)} alt={title} className='product-image' />}
        <Link to={`/product/${slug}-${id}`}>
          <Title level={4}>{title}</Title>
        </Link>
        {shop && (
          <Space>
            <span className='product-by'>By</span>
            <Link to={`/shop/${shopId}`} className='shop-link'>
              {shop.title}
            </Link>
          </Space>
        )}
        <Space>
          <span className='product-price'>{price}</span>
          <Button color='primary' variant='filled' size='large' icon={<ShoppingOutlined />} className='bold-text'>
            Add
          </Button>
          <HeartOutlined style={{ fontSize: 30, opacity: 0.5 }} title='add to wishlist' />
        </Space>
      </Flex>
    </Card>
  )
}

export default ProductCard
