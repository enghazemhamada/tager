import Categorys from "../../components/Categorys";
import FeaturedProducts from "../../components/FeaturedProducts";
import HomeLanding from "../../components/HomeLanding";
import Products from "../../components/Products";

export default function Home() {
    return(
        <>
            <HomeLanding />
            <Categorys />
            <FeaturedProducts />
            <Products />
        </>
    );
}