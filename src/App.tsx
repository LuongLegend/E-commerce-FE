import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AntdRegistry } from '@ant-design/nextjs-registry';

import ClientLayout from './layouts/Client/index';
import Home from './components/Home';
import Header from './layouts/Client/Header';

import './App.css';
import 'antd/dist/reset.css';

function App({ children }: React.PropsWithChildren) {
    return (
        <>
            <Router>
                <AntdRegistry>
                    {children}
                    <Routes>
                        <Route path='/' element={<Home />} />
                    </Routes>
                    <Header />
                    {/*<ClientLayout>*/}
                    {/*</ClientLayout>*/}
                </AntdRegistry>
            </Router>
        </>
    );
}

export default App;
