import React, { useContext, useState } from 'react';
import { CartContext } from '../../App';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';


const Shop = () => {
    const [products, setProducts] = useState(fakeData.slice(0,10))
  

    const [cart, setCart] = useContext(CartContext)

    const addToCart = (product) => {
        console.log("product added", product)  
        setCart([...cart, product])
    }
    return (
        <div className="shop-container">
           <div className="product-container">
               {
                   products.map(pd => <Product product={pd} addToCart={addToCart} key={pd.key}></Product>)
               }
           </div>
           <div className="cart-container">
               <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Shop;