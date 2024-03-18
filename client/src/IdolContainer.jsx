import IdolCard from "./IdolCard"

function IdolContainer({groups}) {

    return (
        <div className="idol-container">
            <ul className="idol-cards">
                {groups.map((group) => {
                    return(
                        group.idols.map((idol) => {
                        return (<IdolCard
                            className="idol-card" idol = {idol} key = {idol.id} />)
                })
                    )
                })}
            </ul>
        </div>
    )
}

export default IdolContainer