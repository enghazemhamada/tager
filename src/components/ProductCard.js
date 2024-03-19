import { useDispatch } from "react-redux";
import { addProduct } from "../rtk/slices/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export default function ProductCard({img, name, price, product}) {

    const dispatch = useDispatch();

    return(
        <div className="card">
            <div className="image">
                <img src={require(`../assets/${img}`)} alt={name} loading="lazy" />
            </div>
            <FontAwesomeIcon icon={faHeart} className="heart" />
            <div className="info">
                <h5>{name}</h5>
                <p>$ {price}</p>
                <button onClick={() => dispatch(addProduct(product))}>
                    <FontAwesomeIcon icon={faCartPlus} />
                </button>
            </div>
        </div>
    );
}