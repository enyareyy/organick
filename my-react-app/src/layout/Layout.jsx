import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import {Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Shop from '../pages/Shop'
import ScrollToTop from './ScrollToTop'
import ShopSingle from '../pages/ShopSingle'
import SearchProduct from '../pages/SearchProduct'
import Form from '../components/form/Form'
import Cart from '../cart/Cart'
import Services from '../pages/Services'
import PortfolioStandard from '../pages/PortfolioStandard'
import PortfolioDetails from '../pages/PortfolioDetails'
import OurTeam from '../pages/OurTeam'
import ContactUs from '../pages/ContactUs'
const Layout = () => {
  return (
    <div>
      {/* <Form/> */}
        <Header/>
        <ScrollToTop/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='shop' element={<Shop/>}/>
            <Route path="shop-single/:id" element={<ShopSingle/>} />
            <Route path='search/:query' element={<SearchProduct/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/portfolio-standard' element={<PortfolioStandard/>}/>
            <Route path="/portfolio-standard/:id" element={<PortfolioDetails />} />
            <Route path='/our-team' element={<OurTeam/>}/>
            <Route path='/contact-us' element={<ContactUs/>}/>
        </Routes> 


        <Footer/>
    </div>
  )
}

export default Layout