import { Routes, Route } from 'react-router-dom'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { ConfigProvider } from 'antd'

import ClientLayout from './layouts/Client/index'
import Home from './components/Home'

import './App.css'
import 'antd/dist/reset.css'

function App({ children }: React.PropsWithChildren) {
  return (
    <>
      <AntdRegistry>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#3bb77e'
            }
          }}
        >
          {children}
          <Routes>
            <Route element={<ClientLayout />}>
              <Route path='/' element={<Home />} />
            </Route>
          </Routes>
        </ConfigProvider>
      </AntdRegistry>
    </>
  )
}

export default App
