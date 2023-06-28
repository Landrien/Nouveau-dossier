import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './FrontEnd/PAGES/HomePage/Home'
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductPage from './FrontEnd/PAGES/Product/ProductPage';
import About from './FrontEnd/PAGES/Extra/About';
import Contact from './FrontEnd/PAGES/Extra/Contact';
import Login from './FrontEnd/PAGES/Auth/Login';
import Signup from './FrontEnd/PAGES/Auth/Signup';
import ForgotPassword from './FrontEnd/PAGES/Auth/ForgotPassword';
import Cart from './FrontEnd/PAGES/Cart/Cart';
import UserProfile from './FrontEnd/PAGES/User/UserProfile';
import FAQ from './FrontEnd/PAGES/Extra/FAQ';
import Termsandconditions from './FrontEnd/PAGES/Extra/Termsandconditions';
import PrivacyPolicy from './FrontEnd/PAGES/Extra/PrivacyPolicy';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:prodid" 
          element={
            <ProductPage/>
          }
        />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/forgotpassword" element={<ForgotPassword/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path='/user/:activepage' element={<UserProfile/>} />
        <Route path="/FAQ" element={<FAQ/>} />
        <Route path="/termsandconditions" element={<Termsandconditions/>} />
        <Route path="/privacypolicy" element={<PrivacyPolicy/>} />

        <Route path="*" element={<div>
          <h1>404 NOT FOUND</h1>
        </div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App