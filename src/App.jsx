import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
// import ProtectedRoute from './utils/ProtectedRoute';
import { HeaderFooterTemplate } from "@src/components/Organisms/HeaderFooterTemplate";
import './App.css';

import { Landing } from 'pages/Landing';
// import { Seller } from './pages/seller';
import { Shop } from './pages/shop/shopId';
import { ShopItem } from './pages/shop/shopId/i/itemId';
import Login from 'pages/s/Login/loginPage';


function App() {
  return (
    <div className="App">
      <HeaderFooterTemplate>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login/>} />
          
            <Route path="/shop/:shopId" element = {<Shop/>} />
            <Route path="/shop/:shopId/i/:itemId" element = {<ShopItem/>} />
            {/* <Route 
              path="/seller" 
              element={
                <ProtectedRoute>
                  <Seller/>
                </ProtectedRoute>} />  */}
        </Routes>
      </HeaderFooterTemplate>
    </div>
  );
}

export default App;
