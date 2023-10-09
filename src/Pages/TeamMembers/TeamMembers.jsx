import { useLoaderData } from "react-router-dom";
import Member from "./Member";


const TeamMembers = () => {

    const members = useLoaderData()
    console.log(members);
    return (
        <div>
            <h1 className="text-5xl font-semibold text-center my-10">Team Members</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-1 md:mx-2 lg:mx-0">
                {
                    members.map(member => <Member key={member.id} member={member}></Member> )
                }
            </div>
        </div>
    );
};

export default TeamMembers;