import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Cart, Dashboard, Home, NoPage, Order } from './pages/pagesExports'
import MyState from './context/data/MyState'



const App = () => {
  return (
    <>
      <MyState>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<Order/>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/*" element={<NoPage />} />
          </Routes>
        </Router>
      </MyState>
    </>
  )
}

export default App