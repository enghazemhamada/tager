import SectionHeading from "./SectionHeading";
import "./featuredProducts.css";
import FeaturedCard from "./FeaturedCard";

export default function FeaturedProducts() {
    return(
        <div className="featuredProducts">
            <div className="container">
                <SectionHeading text="Featured Products" />
                <div className="cards">
                    <FeaturedCard id="item-1" img={require("../assets/vegetables.webp")} hText="Fresh Vegetables" />
                    <FeaturedCard id="item-2" img={require("../assets/fish.webp")} hText="Fresh Fish" />
                    <FeaturedCard id="item-3" img={require("../assets/vegetables.webp")} hText="Enjoy your fresh drink" />
                </div>
            </div>
        </div>
    );
}