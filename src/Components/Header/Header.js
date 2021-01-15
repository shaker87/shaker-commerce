import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import {AiFillCaretDown, AiOutlineShoppingCart} from 'react-icons/ai'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="container-fluid">
                <div className="item-container">
                    <div className="logo item">
                        <h5>SH E-commerce</h5>
                    </div>
                    <div className="deliver item d-flex align-items-center">
                    <IoLocationOutline /><h6>Deliver to <span className="highlights">Bangladesh</span></h6>
                    </div>
                    <div className="search-box item">
                        <input className="form-control inputStyle" placeholder="Search Product" type="text"/>
                    </div>
                    <div className="sign-in item">
                        <h6>Hello, Sign in <span className="highlights">account & list <AiFillCaretDown style={{fontSize: '11px'}}/></span></h6>
                    </div>
                    <div className="returnOrder item">
                        <h6>Returns <span className="highlights">& Order</span></h6>
                    </div>
                    <div className="cartIcon item">
                        <h5><AiOutlineShoppingCart /><span style={{color:'yellow'}}>0</span></h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;