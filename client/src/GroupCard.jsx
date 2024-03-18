import {useState} from "react";
import { useNavigate } from 'react-router-dom';

function GroupCard({group}) {
    const navigate = useNavigate()

    function handleClick() {
        navigate(`/groups/${group.id}`)
    }
    
    return(
        <li className="group_item">
            <div>
                <h2 className="group-name"> {group.name} </h2>
                <img onClick={handleClick} className="group-image" src={group.img_url} alt={"Group Cover"} />
            </div>

        </li>
    )
}

export default GroupCard