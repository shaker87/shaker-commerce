import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="bg-dark">
            <nav className="nav">
                <a href="/all">All</a>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
                <a href="/sell">Sell</a>
                <a href="/sustomer-service">Customer Service</a>
            </nav>
        </div>
    );
};

export default Navbar;