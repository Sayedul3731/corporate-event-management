import "./Location.css"
import { useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css'

const Location = () => {
    useEffect(() => {
        AOS.init({duration: 2000});
    }, [])
    return (
        <div className=" my-10">
            <h1 data-aos="fade-right" className="text-5xl text-center font-semibold mb-10">Our Location</h1>
            <div className="bg-green-400 w-full h-[400px] flex justify-center items-center location">
                <address data-aos="zoom-in-up" className="text-xl md:text-3xl text-center font-semibold text-white">
                   <span data-aos="fade-left"> 11/12 Station Road,</span>
                    <br />
                    <span data-aos="fade-right">Nazir Ahmed Building,</span>
                    <span data-aos="fade-right">3rd floor,</span>
                    <br />
                    <span data-aos="fade-left">South Mourail, Brahmmanbaria.</span>
                </address>
            </div>

        </div>
    );
};

export default Location;