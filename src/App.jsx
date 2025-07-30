import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Header from './Layout/Header';
import Payment from './Components/Payment';
import ShopNow from './Components/ShopNow';
import Footer from './Layout/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Library from './Components/Library';

import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Header />


      
      <Routes>


        <Route path="/"  element={<Home />} />
        <Route path="/payment" element={<Payment />} />
        <Route path='/shopnow'  element={<ShopNow/>} />
        <Route path="/about" element={<About />} />
        <Route path="/library" element={<Library />} />
        <Route path="/contact" element={<div style={{padding: '2rem', textAlign: 'center', backgroundColor: '#1a1a1a', color: '#fff', minHeight: '100vh'}}><h1 style={{color: '#00ffcc'}}>Contact Us</h1><p>Email: support@gamezone.com</p></div>} />
        <Route path="/issues" element={<div style={{padding: '2rem', textAlign: 'center', backgroundColor: '#1a1a1a', color: '#fff', minHeight: '100vh'}}><h1 style={{color: '#00ffcc'}}>Report Issues</h1><p>Please contact our support team for any issues.</p></div>} />
        
        



      </Routes>

      <Footer />
    </BrowserRouter>
    
  );
}

export default App;


