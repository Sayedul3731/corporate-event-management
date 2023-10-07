import { Outlet } from "react-router-dom"
import Navbar from "../Header/Navbar";

const Root = () => {
    return (
        <div className="max-w-[1250px] mx-auto font-Gabarito">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;