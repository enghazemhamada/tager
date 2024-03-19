import { Link } from "react-router-dom";
import QualityCard from "./QualityCard";
import SectionHeading from "./SectionHeading";

export default function Quality() {
    return(
        <div className="quality">
            <div className="container">
                <SectionHeading text="Why Choose Our Food?" />
                <div className="cards">
                    <QualityCard img={require("../assets/quality-1.webp")} title="Quality Food" desc="Because Your Health And The Health Of Your Family Are Important To Us, All Our Productsare 100% Natural Without Any Chemicals." />
                    <QualityCard img={require("../assets/quality-2.webp")} title="Super Taste" desc="Because Your Happiness Is Our Goal, We Have A Wonderful Team In Our Kitchen To Provide The Most Delicious And Wonderful Food." />
                    <QualityCard img={require("../assets/quality-3.webp")} title="Fast Delivery" desc="We Have A Delivery Team, So If You Are Anywhere, All You Have To Do Is Choose Your Food And As Soon As Possible It Will Be In Front Of Your Eyes." />
                </div>
                <div className="wrapper">
                    <div className="image">
                        <img src={require("../assets/burger.webp")} alt="burger" loading="lazy" />
                    </div>
                    <div className="text">
                        <h3>Best Quality and Taste</h3>
                        <p>
                            Because your health is important to us, all of our products are 100% natural, and we have
                            a wonderful Team in our kitchen to provide the most delicious and wonderful food.
                        </p>
                        <ul>
                            <li>All our productsare 100% natural without any chemicals.</li>
                            <li>All our productsare 100% natural without any chemicals.</li>
                            <li>All our productsare 100% natural without any chemicals.</li>
                        </ul>
                        <Link to="#">See More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}