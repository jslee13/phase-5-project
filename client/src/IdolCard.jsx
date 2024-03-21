import { useState } from "react"

function IdolCard({idol}) {

    const [detail, setDetail] = useState(false)

    function onRender() {
        setDetail(!detail)
    }

    function splitFacts(factsString) {
        return factsString.split("–").filter((fact) => fact.trim() !== "");
    }
    
    return(
        <li className="idol_item">
            <div className={`idol-card ${detail ? '' : 'hidden'}`}>
                <div onClick={onRender}>
                    <h2 className="idol-name"> {idol.stage_name}</h2>
                    <img className="idol-image" src={idol.img_url} alt={"Idol Cover"}/>
                </div>
                <div className="idol-content">
                    <p> Birth Name: {idol.birth_name} </p>
                    <p> Positions: {idol.positions.length > 0
                        ? idol.positions.map((position, index) => (
                            <span key={position.id}>
                                {index > 0 && ', '}
                                {position.name}
                            </span>
                        ))
                        : null
                    }
                    </p>
                    <p> Birthday: {idol.birthday} </p>
                    <p> Height: {idol.height} </p>
                    <p> Weight: {idol.weight} </p>
                    <p> Blood Type: {idol.blood_type} </p>
                    <p> MBTI: {idol.mbti} </p>
                    <p> Nationality: {idol.nationality} </p>
                    <p> Instagram: {idol.instagram} </p>
                    <p> Facts: {" "}
                    {idol.facts ? (
                        <ul> 
                            {splitFacts(idol.facts).map((fact, index) => (
                                <li key={index}>- {fact.trim()}</li>
                            ))}
                        </ul>
                    ) : null} </p>
                </div>
            </div>

        </li>
    )
}

export default IdolCard