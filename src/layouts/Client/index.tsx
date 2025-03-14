import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer'
import NavigationBar from './NavigationBar'

const index = () => {
  return (
    <div>
      <Header />
      <NavigationBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default index
