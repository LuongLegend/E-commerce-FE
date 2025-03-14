import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from './store/store'

export const useAuth = () => {
  const user = useSelector((state: RootState) => state.user)

  return user && user.loggedIn
}

const ProtectedRoute = () => {
  const location = useLocation()
  const isAuth = useAuth()
  return isAuth ? <Outlet /> : <Navigate to='/login' replace state={{ from: location }} />
}

export default ProtectedRoute
