import React from 'react';
import Item from '../Item/Item';

const Cart = ({ cart }) => {

    return (
        <div>
            {
                cart.map(item => <Item item={item}></Item>)
            }
        </div>
    );
};

export default Cart;