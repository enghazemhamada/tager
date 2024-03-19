import { productsData } from "../data/productsData";
import ProductCard from "./ProductCard";
import SectionHeading from "./SectionHeading";
import "./products.css";

export default function Products() {

    const ProductsCards = productsData.map((product) => <ProductCard key={product.id} product={product} img={product.img} name={product.name} price={product.price} />)

    return(
        <div className="products">
            <div className="container">
                <SectionHeading text="all products" />
                <div className="cards">{ProductsCards}</div>
            </div>
        </div>
    );
}