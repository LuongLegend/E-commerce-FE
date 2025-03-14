import { useEffect, useState } from 'react'
import callApi from '../utils/callApi'
import Products from './Products'

const Home = () => {
  const [products, setProducts] = useState([])
  const getProducts = async () => {
    const result = await callApi('/product')
    const { data, status } = result
    if (status === 1) {
      setProducts(data)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <Products products={products} />
    </>
  )
}

export default Home
