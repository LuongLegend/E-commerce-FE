import { Flex } from 'antd'

import { ProductType } from '../types/product'
import ProductCard from '../components/ProductCard'
import '~/styles/Product.css'

type ProductsProp = { products: ProductType[] } & React.PropsWithChildren

const Products = ({ products }: ProductsProp) => {
  return (
    <div>
      <Flex gap='middle'>
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </Flex>
    </div>
  )
}

export default Products
