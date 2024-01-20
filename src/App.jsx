import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AddProduct, AllProducts, Cart, Dashboard, Home, Login, NoPage, Order, ProductInfo, Signup, UpdateProduct } from './pages/pagesExports'
import MyState from './context/data/MyState'


const App = () => {
  return (
    <>
      <MyState>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/order" 
              element={
                <ProtectedRouteForUser>
                  <Order/>
                </ProtectedRouteForUser>
              } 
            />
            <Route path="/cart" element={<Cart />} />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRouteForAdmin>
                  <Dashboard />
                </ProtectedRouteForAdmin>
              } 
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/productinfo/:id" element={<ProductInfo />} />

            <Route 
              path="/addproduct" 
              element={
                <ProtectedRouteForAdmin>
                  <AddProduct />
                </ProtectedRouteForAdmin>
              } 
            />

            <Route 
              path="/updateproduct" 
              element={
                <ProtectedRouteForAdmin>
                  <UpdateProduct />
                </ProtectedRouteForAdmin>
              } 
            />
            <Route path="/cart" element={<Cart />} />

            <Route path="/allproducts" element={<AllProducts />} />
            
            <Route path="/*" element={<NoPage />} />
          </Routes>
        </Router>
      </MyState>
    </>
  )
}

export default App

// user
export const ProtectedRouteForUser = ({ children }) => {
  if (localStorage.getItem('user')) {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}

// admin
export const ProtectedRouteForAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  console.log(admin.user.email)
  if (admin.user.email === 'admin@admin.com') {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}