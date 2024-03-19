import { useDispatch, useSelector } from "react-redux";
import CartCard from "../../components/CartCard";
import { clearCart } from "../../rtk/slices/cartSlice";
import "./cart.css";

export default function Cart() {

    const cartProducts = useSelector(state => state.cart);
    
    const ProductsCards = cartProducts.map((product) => <CartCard key={product.id} product={product} />);

    const totalPrice = cartProducts.reduce((acc, product) => {
        acc += product.price * product.quantity;
        return acc;
    }, 0);
    const totalQuantity = cartProducts.reduce((acc, product) => {
        acc += product.quantity;
        return acc;
    }, 0);

    const dispatch = useDispatch();

    return(
        <div className="cart">
            <div className="container">
                { 
                    cartProducts.length > 0 ?
                    <>
                    <button className="clear" onClick={() => dispatch(clearCart())}>Clear Cart</button>
                    <div className="wrapper">
                        <div className="cards">{ProductsCards}</div>
                        <div className="summary">
                            <h4>Order Summary</h4>
                            <ul>
                                <li>
                                    <span>Quantity</span>
                                    <span>{totalQuantity}</span>
                                </li>
                                <li>
                                    <span>Total</span>
                                    <span>$ {totalPrice}</span>
                                </li>
                            </ul>
                            <button>Check</button>
                        </div>
                    </div>
                    </>
                    : <h2>Your Cart Is Empty</h2>
                }
            </div>
        </div>
    );
}