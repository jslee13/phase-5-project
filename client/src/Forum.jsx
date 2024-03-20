import { useState, useEffect } from 'react';
import { useParams, useOutletContext, useNavigate } from 'react-router-dom';
import Post from './Post';


function Forum() {
    const params = useParams();
    const {groups} = useOutletContext()
    const [forums, setForums] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5555/groups/${params.id}/forum`)
          .then(res => res.json())
          .then(data => setForums(data))
      }, [])


    function handleClick() {
        navigate(`/groups/${params.id}/forum/new_post_form`)
    }

    if(!forums) {
        return <h1> Loading... </h1>
    }

    return (
        <div>
            <h1> {groups.name} Forum Page </h1>
            <button onClick={handleClick} className="new-post">Add Post</button>
            <ul className="posts-list">
                {forums.posts.map((post) => {
                    return (<Post 
                    post={post}
                    key={post.id}
                    />)
                })}
            </ul>
        
        </div>
    )

}

export default Forum