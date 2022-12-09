import React from "react";
import { Routes, Route } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Details from "./components/Details";
import Default from "./components/Default";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes >
        <Route exact path="/" element={<ProductList/>} />
        <Route path="/details" element={<Details/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route element={<Default/>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
