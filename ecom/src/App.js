// App.js
import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";

import ShoppingCart from "./Components/ShoppingCart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaymentForm from "./Components/PaymentForm";

function App() {
  const [cart, setCart] = useState([]);

  function handleAddToCart(item) {
    let itemIdx = cart.findIndex((ele) => {
      return ele.id == item.id;
    });
    console.log(itemIdx, "itemIdx");
    console.log(cart, "cart");
    if (itemIdx !== -1) {
      item.qty += 1;
      let slicedArray1 = cart.slice(0, itemIdx);
      console.log(slicedArray1, "slicedArray1");
      let slicedArray2 = cart.slice(itemIdx + 1);
      console.log(slicedArray2, "slicedArray2");

      const updatedCart = [...slicedArray1, ...slicedArray2, item];
      setCart(updatedCart);
      console.log(cart, "cart inside if");
    } else {
      item.qty = 1;
      const updatedCart = [...cart, item];
      setCart(updatedCart);
      console.log(cart, "cart inside else");
    }
    console.log("item", item);
  }
  console.log(cart, "cart inside else");
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<h1>Home</h1>} />
          <Route
            path="/products"
            element={<ProductList onAddToCart={handleAddToCart} />}
          />
          <Route
            path="/cart"
            element={<ShoppingCart cart={cart} setCart={setCart} />}
          />
          <Route path="/payment" element={<PaymentForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
