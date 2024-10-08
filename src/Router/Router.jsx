import { Outlet } from "react-router-dom";
import Home from "../Components/Home";
import Navbar from "../Components/Navbar";


const Router = () => {
    return (
        <div>
              <Navbar></Navbar>
            <Home></Home>
           <Outlet></Outlet> 
        </div>
    );
};

export default Router;