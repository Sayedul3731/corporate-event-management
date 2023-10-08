import { useLoaderData } from "react-router-dom";
import FeedbackCard from "../../components/FeedbackCard/FeedbackCard";


const ClientFeedback = () => {

    const feedbacks = useLoaderData()
    console.log(feedbacks);
    return (
        <div>
            <h1 className="text-4xl text-center font-semibold">Client Feedback</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 mx-2 md:mx-2 lg:mx-0">
                {
                    feedbacks.map(card => <FeedbackCard key={card.id} card={card}></FeedbackCard>)
                }
            </div>
        </div>
    );
};

export default ClientFeedback;