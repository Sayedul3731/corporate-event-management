import { NavLink } from "react-router-dom"
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react"

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    


    const handleSignOut = () => {
        logOut()
        .then()
        .catch()
    }



    const navLinks = <>
        <li><NavLink className="text-green-500" to="/">Home</NavLink></li>
        <li><NavLink className="text-green-500" to="/services">Services</NavLink></li>
        <li><NavLink className="text-green-500" to="/works">Our Works</NavLink></li>
        <li><NavLink className="text-green-500" to="/location">Location</NavLink></li>
        <li><NavLink className="text-green-500" to="/clientFeedback">Client Feedback</NavLink></li>
        <li><NavLink className="text-green-500" to="/members">Team Members</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 py-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className=" lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-medium">
                        {navLinks}
                    </ul>
                </div>
                <div>
                    <img className="w-[200px]" src="/src/assets/logo.png" alt="" />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-medium">
                    {navLinks}
                </ul>
            </div>
            <div className="md:w-2/4 lg:w-2/4">
                {
                    user ? <p className="w-full lg:w-full flex justify-center items-center gap-4"> <span>{user.displayName}</span> <img className="w-[50px] h-[50px] rounded-full" src={user.photoURL} alt="" /></p> : "" 
                }
            </div>
            <div className="navbar-end">
                {
                    user ? <button onClick={handleSignOut} className="bg-green-500 text-white px-5 py-2 rounded-sm font-semibold">Log Out</button> : <NavLink to="/login"><button className="bg-green-500 text-white px-5 py-2 rounded-sm font-semibold">Login</button></NavLink>
                }
            </div>
        </div>
    );
};

export default Navbar;