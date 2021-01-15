import React, { createContext, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Components/Shop/Shop';
export const CartContext = createContext()



function App() {
  const [cart,setCart]=useState([])
  const [loggedInUser, setLoggedInUser]=useState({isSignedIn:false})

  return (
    <CartContext.Provider value={[cart, setCart, loggedInUser, setLoggedInUser]}>
      <Header />
      <Navbar />
      <Shop  />
    </CartContext.Provider>

  );
}

export default App;
