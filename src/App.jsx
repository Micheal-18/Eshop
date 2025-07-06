import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './routes/Home'
import Navbar from './components/Navbar'
// import Footer from './components/Footer'

// Importing styles
import './index.css'

// Main App component

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<>
        <Navbar />
          <Home />
          {/* <Footer /> */}
        </>} />
      </Routes>
    </div>
  )
}

export default App