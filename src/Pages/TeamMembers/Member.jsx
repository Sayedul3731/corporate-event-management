import PropTypes from "prop-types"

const Member = ({ member }) => {
    console.log(member);
    const { image,name , title } = member;
    return (
        <div className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                <img className="w-full object-cover" src={image} alt="profile-picture" />
            </div>
            <div className="p-6 text-center">
                <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {name}
                </h4>
                <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                  {title}
                </p>
            </div>
            <div className="flex justify-center gap-7 p-6 pt-2">
                <a
                    href="#facebook"
                    className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
                >
                    <i className="fab fa-facebook" aria-hidden="true"></i>
                </a>
                <a
                    href="#twitter"
                    className="block bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
                >
                    <i className="fab fa-twitter" aria-hidden="true"></i>
                </a>
                <a
                    href="#instagram"
                    className="block bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
                >
                    <i className="fab fa-instagram" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    );
};

Member.propTypes = {
    member: PropTypes.object
}
export default Member;