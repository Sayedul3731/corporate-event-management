import Location from "../../Pages/Location/Location";
import OurWorks from "../../Pages/OurWorks/OurWorks";
import Services from "../../Pages/Services/Services";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <OurWorks></OurWorks>
            <Location></Location>
        </div>
    );
};

export default Home;