import { Outlet } from "react-router-dom";
import Home from "../Components/Home";


const Router = () => {
    return (
        <div>
            <h3>this is main route pages</h3>
            <Home></Home>
           <Outlet></Outlet> 
        </div>
    );
};

export default Router;