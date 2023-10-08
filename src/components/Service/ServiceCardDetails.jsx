import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState} from "react"
import SelectedCardDetails from "./SelectedCardDetails";
// import SelectedCardDetails from "./SelectedCardDetails";


const ServiceCardDetails = () => {

    const [card, setCard] = useState({})
    const serviceCards = useLoaderData()
    const {id} = useParams()
    useEffect( () => {
        const findCard = serviceCards.find(serviceCard => serviceCard.id == id)
        setCard(findCard)
    },[id, serviceCards])
    return (
        <div>
           {
            <SelectedCardDetails card={card}></SelectedCardDetails>
           }
        </div>
    );
};

export default ServiceCardDetails;