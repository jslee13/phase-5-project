import {useState} from "react";
import { useNavigate } from 'react-router-dom';

function GroupCard({group}) {
    const navigate = useNavigate()

    function handleClick() {
        navigate(`/groups/${group.id}`)
    }
    
    return(
        <li className="group_item">
            <div className="group-card" onClick={handleClick}>
                <h2 className="group-name"> {group.name} </h2>
                <img className="group-image-cover" src={group.img_url} alt={"Group Cover"} />
            </div>

        </li>
    )
}

export default GroupCard