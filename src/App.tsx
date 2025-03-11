import { createContext, Dispatch, SetStateAction, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { ConfigProvider } from 'antd'

import ClientLayout from './layouts/Client/index'
import Home from './pages/Home'
import Login from './pages/Login'

import './App.css'
import 'antd/dist/reset.css'
import ProtectedRoute from './ProtectedRoute'
import Account from './pages/Account'
type AppContextType = {
  user: {
    loggedIn: boolean
  }
  setUser: Dispatch<SetStateAction<{ loggedIn: boolean }>>
}
export const AppContext = createContext<AppContextType | null>(null)

function App({ children }: React.PropsWithChildren) {
  const [user, setUser] = useState({ loggedIn: false })
  return (
    <>
      <AppContext.Provider value={{ user, setUser }}>
        <AntdRegistry>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#3bb77e',
                fontSize: 16
              }
            }}
          >
            {children}
            <Routes>
              <Route element={<ClientLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route element={<ProtectedRoute />}>
                  <Route path='/account' element={<Account />} />
                </Route>
              </Route>
            </Routes>
          </ConfigProvider>
        </AntdRegistry>
      </AppContext.Provider>
    </>
  )
}

export default App
