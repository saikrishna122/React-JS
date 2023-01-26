import './App.css';
import React, { useState } from 'react';
import Products from './components/Listitems/Products';
import Header from './components/Layout/Header';
import Subheader from './components/Layout/Subheader';
const App = () =>
 {
  const[cartItems,setCartItems] = useState(0)
   const handleAddItem =()=>
   {
    setCartItems(cartItems+1)
   }

   const handleRemoveItem=()=>{
    setCartItems(cartItems-1)
   }
  return (  
  <>
  <Header count={cartItems}/>
  <Subheader></Subheader>
  <Products></Products>
  </>  
  );
}

export default App;