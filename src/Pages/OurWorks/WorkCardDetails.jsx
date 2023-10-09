import { useLoaderData, useParams } from "react-router-dom";
import SelectedWorkCardDetails from "./SelectedWorkCardDetails";
import { useEffect, useState } from "react"


const WorkCardDetails = () => {

    const [card, setCard] = useState({})
    const workCards = useLoaderData()
    const { id } = useParams()
    useEffect(() => {
        const findCard = workCards.find(workCard => workCard.id == id)
        setCard(findCard)
    }, [id, workCards])


    return (
        <div>
            {
                 <SelectedWorkCardDetails  card={card}></SelectedWorkCardDetails>
            }
        </div>
    );
};

export default WorkCardDetails;