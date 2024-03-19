import { Link } from "react-router-dom";
import "./homeLanding.css";

export default function HomeLanding() {
    return(
        <div className="homeLanding">
            <div className="container">
                <div className="text">
                    <h2>Healthy And Fresh Grocery</h2>
                    <p>
                        we pride ourselves on providing a curated of the finest,
                        nutrient-rich products that cater to your health conscious lifestyle.
                    </p>
                    <Link to="/about" className="btn">Learn More</Link>
                </div>
                <div className="image">
                    <img src={require("../assets/vegetables.webp")} alt="vegetables" loading="lazy" />
                </div>
            </div>
        </div>
    );
}