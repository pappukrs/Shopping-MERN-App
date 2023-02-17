// ProductList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductList.css'

function ProductList(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products').then((response) => {
      setProducts(response.data);
      console.log("res", response.data);
    });
  }, []);

  function handleAddToCart(item) {
    props.onAddToCart(item);
  }

  return (
    <div>
      <h2>Products</h2>
      <ul className="all-product" >
        {products.map((product) => (
          <li key={product.id} className="each-card">
            <img src={product.img} style={{width:"100px",height:"100px"}}/>
            <br/>
            {product.name} - ${product.price}
            <br/>
            <button className="button" onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
