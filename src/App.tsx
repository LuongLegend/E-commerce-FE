import { Routes, Route } from 'react-router-dom'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { ConfigProvider } from 'antd'
import { Provider } from 'react-redux'
import { GoogleOAuthProvider } from '@react-oauth/google'

import { store } from './store/store'

import ClientLayout from './layouts/Client/index'
import Home from './pages/Home'
import Login from './pages/Login'

import './App.css'
import 'antd/dist/reset.css'
import ProtectedRoute from './ProtectedRoute'
import Account from './pages/Account'
import Register from './pages/Register'

function App({ children }: React.PropsWithChildren) {
  return (
    <>
      <Provider store={store}>
        <AntdRegistry>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#3bb77e',
                fontSize: 16
              }
            }}
          >
            <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_APP}>
              {children}
              <Routes>
                <Route element={<ClientLayout />}>
                  <Route path='/' element={<Home />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/register' element={<Register />} />
                  <Route element={<ProtectedRoute />}>
                    <Route path='/account' element={<Account />} />
                  </Route>
                </Route>
              </Routes>
            </GoogleOAuthProvider>
          </ConfigProvider>
        </AntdRegistry>
      </Provider>
    </>
  )
}

export default App
