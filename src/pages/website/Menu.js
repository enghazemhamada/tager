import Slider from "../../components/Slider";
import MenuSection from "../../components/MenuSection";


export default function Menu() {

    const burgerData = [{name:"Vegetable Burger",price:5},{name:"Cheese Burger",price:10},{name:"Beef Burger",price:20},{name:"Cheese Burger",price:30}];
    const pastaData = [{name:"Salad Pasta",price:5},{name:"Cheese Pasta",price:10},{name:"Beef Pasta",price:20},{name:"Seafood Pasta",price:30}];
    const pizzaData = [{name:"Vegetable Pizza",price:5},{name:"Cheese Pizza",price:10},{name:"Beef Pizza",price:20},{name:"Seafood Pizza",price:30}];

    return(
        <>
            <Slider />
            <MenuSection title="Our Delicious Burger" data={burgerData} />
            <MenuSection title="Our Delicious Pasta" data={pastaData} />
            <MenuSection title="Our Delicious Pizza" data={pizzaData} />
        </>
    );
}