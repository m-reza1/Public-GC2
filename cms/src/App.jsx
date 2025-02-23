import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import HomePage from './views/HomePage';
import LoginPage from './views/LoginPage';
import ProductPage from './views/ProductPage';
import CategoryPage from './views/CategoryPage';
import UserPage from './views/UserPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/users" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
};