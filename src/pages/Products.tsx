import { Button, Card, Flex, Space, Typography } from 'antd'
import { getImageUrl } from '../utils/common'
import { HeartOutlined, ShoppingOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import './Product.css'

type ProductType = {
  id: string
  title: string
  description: string
  price: number
  sku: string
  slug: string
  frontImg?: string
  backImg?: string
  product_meta?: {
    id: number
    weight: string
    height: string
    color: string
    size: string
    quantity: number
  }[]
  shopId: string
  shop?: {
    title: string
    img: string | null
  }
}

type ProductsProp = { products: ProductType[] } & React.PropsWithChildren

const Product = ({ product }: { product: ProductType }) => {
  const { id, title, shop, price, slug, frontImg, shopId } = product
  const { Title } = Typography
  return (
    <Card hoverable>
      <Flex vertical style={{ maxWidth: 200 }}>
        {frontImg && <img src={getImageUrl(frontImg)} alt={title} />}
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

const Products = ({ products }: ProductsProp) => {
  return (
    <div>
      <Flex gap='middle'>
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </Flex>
    </div>
  )
}

export default Products
