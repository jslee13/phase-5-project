import FilterBar from "./FilterBar";
import GroupContainer from "./GroupContainer";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

function GroupPage(){
    const {groups} = useOutletContext();
    const [searchString, setSearchString] = useState("")
    
    return(
        <div>
            <FilterBar searchString={searchString} setSearchString={setSearchString} />
            <GroupContainer searchString={searchString} groups={groups}/>

        </div>
    )
}


export default GroupPage;