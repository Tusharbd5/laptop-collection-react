import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

import Product from '../Product/Product';
import './Dashboard.css'

const Dashboard = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleAddToCart = selectedProduct => {
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            setCart([...cart, selectedProduct]);
        }
    }
    const handleChange = (item) => {
        setCart([item[Math.floor(Math.random() * item.length)]]);
    }
    const choseAgain = () => {
        setCart([]);
    }

    return (
        <div className='display-content'>
            <div className='item-content'>
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        handleAddToCart={handleAddToCart}>
                    </Product>)
                }
            </div>
            <div className='cart-content'>
                <div className='cart'>
                    <h3>Selected Items</h3>
                    <Cart cart={cart}
                        handleChange={handleChange}
                        choseAgain={choseAgain}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;