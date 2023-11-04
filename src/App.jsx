import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Cart, Dashboard, Home, Login, NoPage, Order, ProductInfo, Signup } from './pages/pagesExports'
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
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/productinfo/:id" element={<ProductInfo />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/*" element={<NoPage />} />
          </Routes>
        </Router>
      </MyState>
    </>
  )
}

export default App