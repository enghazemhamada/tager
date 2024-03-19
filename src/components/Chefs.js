import ChefCard from "./ChefCard";
import SectionHeading from "./SectionHeading";

export default function Chefs() {
    return(
        <div className="chefs">
            <div className="container">
                <SectionHeading text="Our Chefs" />
                <div className="cards">
                    <ChefCard img={require("../assets/chef-2.webp")} name="Eslam Ahmed" desc="More than 15 years experience" />
                    <ChefCard img={require("../assets/chef-3.webp")} name="Ibrahim Mohamed" desc="More than 20 years experience" />
                    <ChefCard img={require("../assets/chef-4.webp")} name="Hamdy Khaled" desc="More than 10 years experience" />
                    <ChefCard img={require("../assets/chef-1.webp")} name="Mostafa Ahmed" desc="More than 5 years experience" />
                </div>
            </div>
        </div>
    );
}