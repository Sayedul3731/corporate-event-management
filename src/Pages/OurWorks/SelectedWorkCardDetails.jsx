import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import swal from 'sweetalert';
import { useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css'

const SelectedWorkCardDetails = ({card}) => {
    const {title, price, image, description, service_provided} = card;
    const handlePurchase = () => {
        swal("Thank You!", "But It is not working!", "success");
    }
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])

    return (
        <div className="relative border pt-4 h-auto md:h-[90vh] lg:h-[90vh] mt-10 flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mb-10">
        <div className="relative mx-4 overflow-hidden  rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
            <img data-aos="zoom-in-up" className="w-full h-full"
                src={image}
                alt="img-blur-shadow"
            />
        </div>
        <div className="p-4">
            <div className='flex justify-between items-center'>
                <h5 data-aos="fade-left" className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {title}
                </h5>
                <p data-aos="fade-right" className='text-2xl font-medium'>{price}$</p>
            </div>
            <p data-aos="zoom-in-up" className="block font-sans text-xl mb-4 text-base font-light leading-relaxed text-inherit antialiased lg:h-28">
               {description}
            </p>
            <h2 data-aos="fade-left" className="text-2xl font-medium">Service Provided: {service_provided} times</h2>
        </div>
        <div className="p-4 pt-0">
            <Link>
                <button data-aos="fade-down" onClick={handlePurchase}
                    className="select-none rounded-sm bg-green-500 w-full py-3 text-center align-middle font-sans text-xl font-bold uppercase text-white shadow-md shadow-green-400/20 transition-all hover:shadow-lg hover:shadow-green-400/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                >
                    Purchase
                </button>
            </Link>
        </div>
    </div>
    );
};
SelectedWorkCardDetails.propTypes = {
    card: PropTypes.object
}
export default SelectedWorkCardDetails;