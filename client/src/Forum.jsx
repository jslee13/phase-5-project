import { useState, useEffect } from 'react';
import { useParams, useOutletContext, useNavigate } from 'react-router-dom';
import Post from './Post';
import PostFilterBar from './PostFilterBar';


function Forum() {
    const params = useParams();
    const {groups} = useOutletContext()
    const [forums, setForums] = useState(null)
    const navigate = useNavigate();
    const [searchString, setSearchString] = useState("")
    
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

    console.log(searchString)
    console.log(forums.posts)

    const filteredPost = forums.posts.filter((post) => 
    post.title.toLowerCase().includes(searchString.toLowerCase()) ||
    post.body.toLowerCase().includes(searchString.toLowerCase()))

    


    return (
        <div className='forum-container'>
            <div className='forum-header'>
                <h1> {forums.group.name} Forum Page </h1>
                <PostFilterBar searchString={searchString} setSearchString={setSearchString} />
                <button onClick={handleClick} className="new-post-btn">Add Post</button>
                <ul>
                    {filteredPost.map((post) => {
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