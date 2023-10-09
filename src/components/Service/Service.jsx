import PropTypes from 'prop-types';
import { Link } from "react-router-dom"

const Service = ({ serviceCard }) => {
    const { id, image, title, price, description } = serviceCard;

    return (
        <div className="relative flex flex-col rounded-xl bg-white pt-4 bg-clip-border text-gray-700 shadow-md mb-10">
            <div className="relative mx-4 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                <img
                    src={image}
                    alt="img-blur-shadow"
                />
            </div>
            <div className="p-4">
                <div className='flex justify-between items-center'>
                    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title}
                    </h5>
                    <p className='text-xl font-medium'>{price}$</p>
                </div>
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased h-28">
                    {description.length > 200 ? <p>{description.slice(0, 200)}<span>...</span></p> : ''}
                </p>
            </div>
            <div className="p-4 pt-0">
                <Link to={`/serviceCard/${id}`}>
                    <button
                        className="select-none rounded-sm bg-blue-500 md:bg-green-500 w-full py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-400/20 transition-all hover:shadow-lg hover:shadow-green-400/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                    >
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

Service.propTypes = {
    serviceCard: PropTypes.object
}
export default Service;