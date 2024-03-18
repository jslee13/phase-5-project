import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Forum() {
    const params = useParams();
    const {groups} = useOutletContext()
    const [forums, setForums] = useState([])
    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5555/forums')
          .then(res => res.json())
          .then(data => setForums(data.group_id))
      }, [])


    function updatePosts(newPost) {
    setPosts([...posts, newPost])
    }

    function updateComments(newComment) {
    setComments([...comments, newComment])
    }

    function handleClick() {
        navigate(`/new_posts`)
    }

    return (
        <div>
            <h1> {groups.name} Forum Page </h1>
            <button onclick={handleClick} className="new-post">Add Post</button>
            <Outlet context={{forums, setForums, posts, setPosts, updatePosts,comments, setComments, updateComments}}/>
        
        
        </div>
    )

}

export default Forum