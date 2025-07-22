import React, { useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './routes/Home'
import Navbar from './components/Navbar'
import Footer from './routes/Footer'
import Blog from './routes/Blog'
import AOS from 'aos';
import "aos/dist/aos.css";

// Importing styles
import './index.css'

import Brand from './routes/Brand';
import { useState } from 'react';
// Main App component

const App = () => {

  const [showCart, setShowCart] = useState(false);

  const handleCartClick = () => {
    setShowCart(!showCart);
  }


  useEffect(() => {
    AOS.init(
      {
        duration: 2000,
        easing: "ease",
        delay: 100,
        offset: 100,       
      }
    );
    AOS.refresh();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<>
        <Navbar handleCartClick={handleCartClick} showCart={showCart} setShowCart={setShowCart}/>
          <Home handleCartClick={handleCartClick}/>
           <Blog />
           <Brand />
          <Footer />
        </>} />
       
      </Routes>
    </div>
  )
}

export default App