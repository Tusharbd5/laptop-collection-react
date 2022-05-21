import Item from '../Item/Item';

const Cart = (props) => {

    const { cart, handleChange } = props;

    // const [random, setRandom] = useState([]);
    // const randomItem = () => {
    //     let element = [cart[Math.floor(Math.random() * cart.length)]];
    //     setRandom(element);

    // }
    return (
        <div>
            {
                cart.map(item => <Item item={item}
                    key={item.id}></Item>)
            }

            <button onClick={() => { handleChange(cart) }}>Choose Random</button>
        </div>
    );
};

export default Cart;