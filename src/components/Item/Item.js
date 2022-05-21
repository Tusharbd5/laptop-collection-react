import React from 'react';
import './Item.css'

const Item = props => {
    const { name, img } = props.item;
    return (
        <div className='item'>
            <img src={img} alt="" />
            <p>{name}</p>
        </div>
    );
};

export default Item;