import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    const price = cart.reduce((prevPrice, currentProduct) => prevPrice + currentProduct.price ,0)
    let shippingCost;
    if(price === 0) {
        shippingCost = 0;
    }
    else if(price >= 5 && price <= 40){
        shippingCost = 5;
    }
    else if(price >= 41 && price <= 50){
        shippingCost = 15;
    }
    else if(price >= 60){
        shippingCost = 20;
    }

    const tax = price * 5 / 100;
    const grandTotal = price + tax + shippingCost;
   
    const priceFixed = (p) => p.toFixed(2);

    return (
        <div className="cart">
            <h5>Order Summary</h5>
            <h6>Items: {cart.length} </h6>
            <h6>Shipping & Handling: {priceFixed(shippingCost)}</h6>
            <h6>Total Before Tax: {priceFixed(price)}</h6>
            <h6>Estimated Tax: {priceFixed(tax)}</h6>
            <h5 style={{color: '#9E280A'}}>Order Total Price: {priceFixed(grandTotal)}</h5>
        </div>
    );
};

export default Cart;