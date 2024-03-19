import CategoryCard from "./CategoryCard";
import SectionHeading from "./SectionHeading";
import "./categorys.css";

export default function Categorys() {
    return(
        <div className="categorys">
            <div className="container">
                <SectionHeading text="category" />
                <div className="cards">
                    <CategoryCard img={require("../assets/vegetables.webp")} title="vegetables" />
                    <CategoryCard img={require("../assets/fruits.webp")} title="fruits" />
                    <CategoryCard img={require("../assets/drinks.webp")} title="drinks" />
                    <CategoryCard img={require("../assets/nuts.webp")} title="fresh nuts" />
                    <CategoryCard img={require("../assets/fish.webp")} title="fresh fish" />
                    <CategoryCard img={require("../assets/meat.webp")} title="meat" />
                </div>
            </div>
        </div>
    );
}