// ShoppingCart.js
import './ShoppingCart.css'
import React, { useState,useEffect, useRef } from 'react';
import PaymentForm from './PaymentForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ShoppingCart(props) {

  let sum=0;
  const totalPrice=()=>{
    

    props.cart.forEach((ele)=>{
      sum+=(+ele.price)*(+ele.qty);
    })

  }

  const nav = useNavigate()
  console.log("props",props);
  const [checkout, setCheckout] = useState(false);
  const clean=useRef();

   const handleIncrease=(item)=>{
    const CartItem= props.cart.filter((cartItem) => cartItem.id == item.id);
     const RemainingItem= props.cart.filter((cartItem) => cartItem.id !== item.id); 
    CartItem[0].qty+=1;
       props.setCart([...RemainingItem,...CartItem]);
    console.log("CartItem", CartItem)
   }
   const handledecrease=(item)=>{
    const CartItem= props.cart.filter((cartItem) => cartItem.id == item.id);
     const RemainingItem= props.cart.filter((cartItem) => cartItem.id !== item.id); 
    CartItem[0].qty-=1;
       props.setCart([...RemainingItem,...CartItem]);
    console.log("CartItem", CartItem)
   }

  function handleRemoveFromCart(item) {
    const updatedCart = props.cart.filter((cartItem) => cartItem.id !== item.id);
    props.setCart(updatedCart);
  }

  function handleCheckout() {
    setCheckout(true);
   if(props.cart.length>0){
    nav('/payment')
   } 
  }

  function handleCancelCheckout() {
    setCheckout(false);
  }

  function handleConfirmCheckout() {
    // Create an order with the server
    axios.post('http://localhost:5000/api/order', {
      items: props.cart,
    }).then((response) => {
      console.log('Order confirmed!');
      props.setCart([]);
      setCheckout(false);
      console.log("checkout",response);
    });
  }
  totalPrice();
  // useEffect(() => {
  //   // first
      
  //   return () => {
  //      clean.innerHTML="";
  //   }

  //   console.log("cart length changes")
  // }, [])
  

  return (
    <div>
      <h2>Shopping Cart</h2>
      {props.cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul ref={clean} className="shopping-cart-list" style={{display: 'grid',}}>
          {props.cart.map((item) => (
            <li key={item.id} className="each-card">
              <img src={item.img} style={{width:"100px",height:"100px"}}/>
              {item.name} - ${item.price}
              {<p>Quantity:{item.qty}</p>}
              <button className="button" onClick={()=>handleIncrease(item)}>Increase</button>
              <button className="button" onClick={()=>handledecrease(item)}>Decrease</button>
              <button className="button" onClick={() => handleRemoveFromCart(item)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
         
      )
     
      }
      {<h2>Total price is {`$${sum}`}</h2>}
     {props.cart.length>0 && <button className="button" onClick={handleCheckout}>Checkout</button>}  
      {/* {checkout && (
        <div>
          <h2>Checkout</h2>
          
                    <PaymentForm onConfirm={handleConfirmCheckout} onCancel={handleCancelCheckout} />
                    </div>
                  )} */}
                </div>
              );
            }
            
            export default ShoppingCart;
            
