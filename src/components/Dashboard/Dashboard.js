import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Dashboard.css'

const Dashboard = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return (
        <div className='display-content'>
            <div className='item-content'>
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}></Product>)
                }
            </div>
            <div className='cart-content'>
                <div className='cart'>
                    <h3>Selected Items</h3>
                    <Cart></Cart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;