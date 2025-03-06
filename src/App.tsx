import { Routes, Route } from 'react-router-dom'
import { AntdRegistry } from '@ant-design/nextjs-registry'

import ClientLayout from './layouts/Client/index'
import Home from './components/Home'

import './App.css'
import 'antd/dist/reset.css'

function App({ children }: React.PropsWithChildren) {
  return (
    <>
      <AntdRegistry>
        {children}
        <Routes>
          <Route element={<ClientLayout />}>
            <Route path='/' element={<Home />} />
          </Route>
        </Routes>
      </AntdRegistry>
    </>
  )
}

export default App
