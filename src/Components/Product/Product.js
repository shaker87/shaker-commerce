import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import './Product.css';



const Product = ({product, addToCart}) => {
    // console.log(props)
    // const addToCart = props.addToCart;
    const { img, name, seller, price, stock, features } = product;
    // console.log(features)

    return (
        <div className="d-flex product">
            <div className="productImg">
                <img src={img} alt="" srcset="" />
            </div>
            <div className="product-description">
                <h5>{name}</h5>
                <p>By: {seller}</p>
                <div className="basic-info d-flex">
                    <div className="price">
                        <h6 style={{ color: '#B82704' }}>Price: ${price}</h6>
                        <p style={{ color: '#1AA160' }}>Only {stock} left in stock -order soon </p>
                        <button onClick={() => addToCart(product)} className="main-btn"><AiOutlineShoppingCart /> add to cart</button>
                    </div>
                    <div className="features ml-5">
                        <h6>Features</h6>
                        {
                            features.map(f => <li style={{ color: '#9E280A'}}>{f.description}: {f.value}</li>)
                        }
                
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Product;