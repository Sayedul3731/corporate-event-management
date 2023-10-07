import "./Location.css"

const Location = () => {
    return (
        <div className=" my-10">
            <h1 className="text-5xl text-center font-semibold mb-10">Our Location</h1>
            <div className="bg-green-400 w-full h-[400px] flex justify-center items-center location">
                    <address className="text-xl md:text-3xl text-center font-semibold text-white">
                        11/12 Station Road,
                        <br />
                         Nazir Ahmed Building, 
                        3rd floor,
                        <br />
                        South Mourail, Brahmmanbaria.
                    </address>
            </div>

        </div>
    );
};

export default Location;