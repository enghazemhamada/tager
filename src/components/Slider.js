import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./slider.css";

export default function Slider() {

    const [activeIndex, setActiveIndex] = useState(0);

    const imgs = ["slider-1.webp", "slider-2.webp", "slider-3.webp"];

    const lis = imgs.map((img, index) => <li key={index} className={activeIndex === index ? "active" : ''} onClick={() => setActiveIndex(index)}></li>);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex < imgs.length - 1 ? activeIndex + 1 : 0);
        }, 3000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    return(
        <div className="slider" style={{backgroundImage:`url(${require(`../assets/${imgs[activeIndex]}`)})`}}>
            <div className="overlay"></div>
            <div className="text">
                <h2>Dont Stave Just Order</h2>
                <p>
                    we pride ourselves on providing a curated of the finest,
                    nutrient-rich products that cater to your health conscious lifestyle.
                </p>
                <Link to="/about" className="btn">Learn More</Link>
            </div>
            <ul className="bullets">{lis}</ul>
        </div>
    );
}