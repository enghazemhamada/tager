import MenuCard from "./MenuCard";
import SectionHeading from "./SectionHeading";
import "./menuSection.css";

export default function MenuSection({title, data}) {
    return(
        <div className="menuSection">
            <div className="container">
                <SectionHeading text={title} />
                <div className="cards">
                    <MenuCard data={data} />
                    <MenuCard data={data} />
                    <MenuCard data={data} />
                </div>
            </div>
        </div>
    );
}