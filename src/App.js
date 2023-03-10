import React from "react";
import { Routes, Route } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/layout/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart/Cart";
import Details from "./components/Details";
import Default from "./components/Default";
import Modal from "./components/Modal";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes >
        <Route path="/" element={<ProductList/>} />
        <Route path="/details" element={<Details/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="*" element={<Default/>} />
      </Routes>
      <Modal />
    </React.Fragment>
  );
}

export default App;
