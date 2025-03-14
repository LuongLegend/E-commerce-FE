import { useContext } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { AppContext } from './App'

export const useAuth = () => {
  const appContext = useContext(AppContext)
  return appContext && appContext.user && appContext.user.loggedIn
}

const ProtectedRoute = () => {
  const location = useLocation()
  const isAuth = useAuth()
  return isAuth ? <Outlet /> : <Navigate to='/login' replace state={{ from: location }} />
}

export default ProtectedRoute
