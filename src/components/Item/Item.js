import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Item.css'

const Item = props => {
    const { deleteTarget, item } = props;
    const { name, img } = item;

    return (
        <div className='item'>
            <img src={img} alt="" />
            <p>{name}</p>
            <button onClick={() => { deleteTarget(item) }} className='delete-btn'><FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon></button>
        </div>
    );
};

export default Item;