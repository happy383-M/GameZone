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
        
        



      </Routes>

      <Footer />
    </BrowserRouter>
    
  );
}

export default App;


