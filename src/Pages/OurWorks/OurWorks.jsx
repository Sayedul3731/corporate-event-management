import { useEffect, useState } from "react";
import OurWork from "./OurWork";
import AOS from 'aos';
import 'aos/dist/aos.css'


const OurWorks = () => {
    const [worksData, setWorksData] = useState([])
    useEffect(() => {
        fetch('/worked.json')
            .then(res => res.json())
            .then(data => setWorksData(data))
    }, [])

    useEffect(() => {
        AOS.init({duration: 2000});
    }, [])

    return (
        <div>
            <h1  data-aos="fade-up" className="text-5xl text-center font-semibold">Our Works</h1>
            <p data-aos="fade-down" className="text-gray-500 text-center mt-3">We have delivered the following works to our client.
                You are invited to view these works.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
                {
                    worksData.map(worksCard => <OurWork key={worksCard.id} worksCard={worksCard}></OurWork>)
                }
            </div>
        </div>
    );
};

export default OurWorks;