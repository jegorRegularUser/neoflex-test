import { useState } from "react";
import "./App.css";
import SvgIcon from "./assets/svg/SvgIcon";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./store/CartContext";
import Catalog from "./components/main/Catalog";
import Cart from "./components/cart/Cart";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import './i18n';
function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="App"> 
        <Header />
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer/>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
