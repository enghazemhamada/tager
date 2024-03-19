import { Link } from "react-router-dom";

export default function FeaturedCard({id, img, hText}) {
    return(
        <div id={id}>
            <div>
                <h4>{hText}<br /> <span>Big Sale</span></h4>
                <Link to="/">Show Now</Link>
            </div>
            <img src={img} alt={hText} loading="lazy" />
        </div>
    );
}