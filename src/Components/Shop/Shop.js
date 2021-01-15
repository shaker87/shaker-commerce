import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css';


const Shop = () => {
    const [product, setProduct] = useState(fakeData.slice(0,10))

    console.log(product)
    return (
        <div className="shop-container">
           <div className="product-container">
               {
                   product.map(product => <Product product={product} key={product.key}></Product>)
               }
           </div>
           <div className="cart-container">
               <h1>this is cart</h1>
           </div>
        </div>
    );
};

export default Shop;