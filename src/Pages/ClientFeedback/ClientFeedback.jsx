import { useLoaderData } from "react-router-dom";
import FeedbackCard from "../../components/FeedbackCard/FeedbackCard";
import { useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css'


const ClientFeedback = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])

    const feedbacks = useLoaderData()
    return (
        <div>
            <h1 data-aos="fade-down" className="text-4xl text-center font-semibold mt-10">Client Feedback</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 mx-2 md:mx-2 lg:mx-0">
                {
                    feedbacks.map(card => <FeedbackCard key={card.id} card={card}></FeedbackCard>)
                }
            </div>
        </div>
    );
};

export default ClientFeedback;