import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Cart, Dashboard, Home, NoPage, Order } from './pages/pagesExports'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </Router>
  )
}

export default App