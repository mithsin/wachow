import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './utils/ProtectedRoute';
import './App.css';

import { HeaderFooterTemplate } from "./components/Organisms/HeaderFooterTemplate";
import { Landing } from './pages/Landing';
import { Shop } from './pages/shop/shopId'
import Login from './pages/s/login';


function App() {
  return (
    <div className="App">
      <HeaderFooterTemplate>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/shop/:shopId" element = {<Shop/>} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Landing />
              </ProtectedRoute>
            }
          />
        </Routes>
      </HeaderFooterTemplate>
    </div>
  );
}

export default App;
