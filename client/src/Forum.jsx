import { useState, useEffect } from 'react';
import { useParams, useOutletContext, useNavigate } from 'react-router-dom';
import Post from './Post';


function Forum() {
    const params = useParams();
    const {groups} = useOutletContext()
    const [forums, setForums] = useState(null)
    const navigate = useNavigate();

    console.log(groups)

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
        <div className='forum-container'>
            <div className='forum-header'>
                <h1> {groups.name} Forum Page </h1>
                <button onClick={handleClick} className="new-post-btn">Add Post</button>
                <ul>
                    {forums.posts.map((post) => {
                        return (<Post 
                        post={post}
                        key={post.id}
                        />)
                    })}
                </ul>
        
            </div>
        </div>
    )

}

export default Forum