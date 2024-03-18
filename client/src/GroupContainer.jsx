import GroupCard from './GroupCard'

function GroupContainer({groups, searchString}) {

    const filteredGroup = groups.filter((group) => 
    group.name.toLowerCase().includes(searchString.toLowerCase()) ||
    group.debut_date.toLowerCase().includes(searchString.toLowerCase()) ||
    group.fandom_name.toLowerCase().includes(searchString.toLowerCase()) ||
    group.youtube.toLowerCase().includes(searchString.toLowerCase()) ||
    group.instagram.toLowerCase().includes(searchString.toLowerCase()) ||
    group.twitter.toLowerCase().includes(searchString.toLowerCase()) ||
    group.tiktok.toLowerCase().includes(searchString.toLowerCase()) ||
    group.info.toLowerCase().includes(searchString.toLowerCase())
    )

    return(
        <div className="group-container">
            <ul className="group-cards">
                {filteredGroup.map((group) => {
                    return (<GroupCard
                        className="group-card" group = {group} key = {group.id} />)
                })}
            </ul>
        </div>
    )
}



export default GroupContainer