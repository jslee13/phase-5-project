import GroupFilterBar from "./GroupFilterBar";
import GroupContainer from "./GroupContainer";
import { useState } from "react";
import { useOutletContext} from "react-router-dom";

function GroupPage(){
    const {groups} = useOutletContext();
    const [searchString, setSearchString] = useState("")
    
    return(
        <div>
            <GroupFilterBar searchString={searchString} setSearchString={setSearchString} />
            <GroupContainer searchString={searchString} groups={groups}/>
        </div>
    )
}


export default GroupPage;