function IdolCard({idol}) {
    
    return(
        <li className="idol_item">
            <div>
                <h2 className="idol-name"> {idol.stage_name} </h2>
                <img className="idol-image" src={idol.img_url} alt={"Idol Cover"} />
                <p> Birth Name: {idol.birth_name} </p>
                <p> Birthday: {idol.birthday} </p>
                <p> Height: {idol.height} </p>
                <p> Weight: {idol.weight} </p>
                <p> Blood Type: {idol.blood_type} </p>
                <p> MBTI: {idol.mbti} </p>
                <p> Nationality: {idol.nationality} </p>
                <p> Instagram: {idol.instagram} </p>
                <p> Facts: {idol.facts} </p>
            </div>

        </li>
    )
}

export default IdolCard