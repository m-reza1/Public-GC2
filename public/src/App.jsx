import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import ProductDetail from "./views/ProductDetail";
import BaseLayout from "./views/BaseLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout/>}>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}