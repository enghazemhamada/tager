import { useDispatch } from "react-redux";
import { decrementQuantity, deleteProduct, incrementQuantity } from "../rtk/slices/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function CartCard({product}) {

    const dispatch = useDispatch();

    return(
        <div className="card">
            <div className="image">
                <img src={require(`../assets/${product.img}`)} alt={product.name} loading="lazy" />
            </div>
            <div className="close" onClick={() => dispatch(deleteProduct(product))}>
                <FontAwesomeIcon icon={faXmark} />
            </div>
            <div className="info">
                <h4>{product.name}</h4>
                <p>$ {product.price}</p>
                <div className="quantity">
                    <button onClick={() => dispatch(decrementQuantity(product))}>
                        <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <span>{product.quantity}</span>
                    <button onClick={() => dispatch(incrementQuantity(product))}>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
            </div>
        </div>
    );
}