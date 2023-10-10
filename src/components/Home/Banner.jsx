import "./Banner.css"
import { useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css'

const Banner = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <div data-aos="zoom-in-up" className="w-full h-[600px] banner my-10">
            <div data-aos="zoom-in-up">
                <h1 className="text-5xl text-white font-bold text-center">Welcome <br /> to <br />  our corporate <br /> event management <br /> site.</h1>
                <h2 className="text-2xl text-white font-medium text-center">We provide technology event services. We are committed <br /> to providing best services. Visit our site for details...</h2>
            </div>
        </div>
    );
};

export default Banner;