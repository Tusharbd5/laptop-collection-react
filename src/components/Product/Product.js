import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = props => {
    const { product, handleAddToCart } = props
    const { name, img, price } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
            </div>
            <button onClick={() => { handleAddToCart(product) }} className='cart-btn'><p>Add To Cart</p> <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon></button>
        </div >
    );
};

export default Product;