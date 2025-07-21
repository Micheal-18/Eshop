import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './routes/Home'
import Navbar from './components/Navbar'
import Footer from './routes/Footer'
import Blog from './routes/Blog'


// Importing styles
import './index.css'
import Brand from './routes/Brand';

// Main App component

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<>
        <Navbar />
          <Home />
           <Blog />
           <Brand />
          <Footer />
        </>} />
       
      </Routes>
    </div>
  )
}

export default App