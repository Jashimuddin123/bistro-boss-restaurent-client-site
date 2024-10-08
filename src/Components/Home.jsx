import { Helmet } from "react-helmet";
import Footer from "../Router/Footer/Footer";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
import Featured from "./Featured";
import FoodCatagory from "./FoodCatagory";
import Popularmenu from "./Popularmenu";
import SectionTitle from "./SectionTitle";
import Testimonials from "./Testimonials";
// import Navbar from "./Navbar";

const Home = () => {
    return (
        <div>
                <Helmet>
           
           <title>Home Page</title>
        
       </Helmet>
            {/* <Navbar></Navbar> */}
            <Banner></Banner>
            <SectionTitle></SectionTitle>
            <FoodCatagory></FoodCatagory>
            <ContactUs></ContactUs>
            <Popularmenu></Popularmenu>
           <Featured></Featured>
           <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;