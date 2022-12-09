import logo from "./logo.svg";
import React from "react";
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
      <ProductList></ProductList>
      <Details></Details>
      <Cart></Cart>
      <Default></Default>
    </React.Fragment>
  );
}

export default App;
