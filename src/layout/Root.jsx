import { Outlet } from "react-router";
import Navbar from "./NavBar/Navbar";
import Footer from "./Footer/Footer";

const Root = () => {
    return (
        <div className="">
            <div className="shadow">
                <Navbar></Navbar>
            </div>
            <Outlet />

            
                <Footer></Footer>
            
        </div>
    );
};

export default Root;