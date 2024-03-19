import IdolCard from "./IdolCard"

function IdolContainer({group}) {

    return (
        <div className="idol-container">
            <ul className="idol-cards">
                {group.idols.map((idol) => {
                        return (<IdolCard
                            className="idol-card" idol = {idol} key = {idol.id} />)
                })
                }
            </ul>
        </div>
    )
}

export default IdolContainer