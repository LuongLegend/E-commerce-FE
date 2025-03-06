import { Outlet } from 'react-router'
import Header from './Header/Header'
import Footer from './Footer'
import NavigationBar from './NavigationBar/NavigationBar'
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
