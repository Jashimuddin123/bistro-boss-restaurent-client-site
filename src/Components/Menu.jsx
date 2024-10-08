import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import Cover from "./Cover";
import menuImg from "../assets/menu/pizza-bg.jpg"
import desserImg from "../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../assets/menu/pizza-bg.jpg"
import saladImg from "../assets/menu/salad-bg.jpg"
import soupImg from "../assets/menu/soup-bg.jpg"
import useMenu from "../CustomsHoks/CustomHooks";
import SectionTitle from "./SectionTitle";
import MenuCategory from "./MenuCategory";


const Menu = () => {
    const  [ menu] = useMenu();
    const dessert  = menu.filter(item=>item.category ==='dessert')
    const soup = menu.filter(item=>item.category ==='soup')
    const salad = menu.filter(item=>item.category ==='salad')
    const pizza = menu.filter(item=>item.category ==='pizza')
    const offered = menu.filter(item=>item.category ==='offered')
 
    return (
        <div>
              <Helmet>
           
                <title>OuR Menu</title>
             
            </Helmet>
          <Navbar></Navbar>
        <Cover img={menuImg}  title="OUR MENU"></Cover>
        <SectionTitle subTitle="Don't Mis " title="Todays Offer"></SectionTitle>
        {/* offers menu items  section  */}
        <MenuCategory items={offered}></MenuCategory>
        {/* dessert menu items section */}
        <MenuCategory items={dessert} title={"Dessert"} coverImg={desserImg }></MenuCategory>
        {/* pizzas menu items section here */}
        <MenuCategory items={pizza} title={"Pizza"} coverImg={pizzaImg}></MenuCategory>
        {/* salads menu items section here */}

         <MenuCategory items={salad} title={"Salad"}  coverImg={saladImg}></MenuCategory>
         {/*  soup menu items section here */}

         <MenuCategory items={soup} title={"Soup"} coverImg={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;