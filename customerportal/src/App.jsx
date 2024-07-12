import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home.jsx'
import SignIn from './pages/SignIn.jsx'
import SignUp from './pages/SignUp.jsx'
import SignOut from './pages/SignOut.jsx'
import ForgotPassword from './pages/ForgotPassword.jsx'
import Profile from './pages/Profile.jsx'
import ShopPage from './pages/ShopPage';
import ProductDetail from './components/ProductDetail';
import CheckoutPage from './pages/CheckoutPage';
import CartPage from './pages/CartPage.jsx';

function App() {

  return (
    <>
     <BrowserRouter> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/signout' element={<SignOut />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App ;
