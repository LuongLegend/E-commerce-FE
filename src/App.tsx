import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import ClientLayout from './layouts/Client/index'
import Home from './components/Home';

function App() {

  return (
    <>
      <ClientLayout>
        <Router>
          <Routes >
            <Route path="/" element={<Home />} />

          </Routes >
        </Router>
      </ClientLayout>
    </>
  )
}

export default App
