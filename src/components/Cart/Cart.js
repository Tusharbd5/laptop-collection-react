import Item from '../Item/Item';
import './Cart.css'

const Cart = (props) => {

    const { cart, handleChange, choseAgain } = props;

    return (
        <div>
            {
                cart.map(item => <Item item={item}
                    key={item.id}></Item>)
            }

            <button className='random-btn' onClick={() => { handleChange(cart) }}>Choose 1 For Me</button>
            <button className='random-btn' onClick={choseAgain}>Choose Again</button>
        </div>
    );
};

export default Cart;