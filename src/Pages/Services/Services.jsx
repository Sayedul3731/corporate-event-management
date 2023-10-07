import { useEffect, useState } from "react";
import Service from "../../components/Service/Service";


const Services = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    console.log(data);
    return (
        <div>
            <h1 className="text-5xl text-center font-semibold">Our Services</h1>
            <p className="text-gray-500 text-center mt-3">We provide the following services. We strive to provide the highest level of service. Hope you like our services.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20 mx-2 md:mx-4 lg:mx-0">
                {
                    data.map(serviceCard => <Service key={serviceCard.id} serviceCard={serviceCard}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;