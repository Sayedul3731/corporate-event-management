import { useLoaderData } from "react-router-dom";
import Member from "./Member";
import { useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css'


const TeamMembers = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])

    const members = useLoaderData()
    console.log(members);
    return (
        <div>
            <h1 data-aos="fade-down" className="text-5xl font-semibold text-center my-10">Team Members</h1>
            <div data-aos="fade-up"
                data-aos-anchor-placement="top-center" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-1 md:mx-2 lg:mx-0">
                {
                    members.map(member => <Member key={member.id} member={member}></Member>)
                }
            </div>
        </div>
    );
};

export default TeamMembers;