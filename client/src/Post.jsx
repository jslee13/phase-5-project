import { useState} from "react"
import { useOutletContext } from 'react-router-dom';
import Comment from './Comment';

function Post({post}) {

    const {currentUser} = useOutletContext()
    const [message, setMessage] = useState("")
    const [comments, setComments] = useState(post.comments)
    
    async function handleSubmit (e) {
        e.preventDefault()
        
        setMessage('');
        
        if (!currentUser) {
            return alert('Must be logged in to Comment')
        }

        const new_comment = { message, post_id: post.id, user_id:currentUser.id } 
        const res = await fetch('/api/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json'
            }, 
        body: JSON.stringify(new_comment)
    })    
        if (res.ok) {
         const data = await res.json()
         console.log(data)
         setComments([...comments, data]);
       } else {
         alert('Invalid comment')
       }

    };
    
    const handleCommentChange = (e) => {
        setMessage(e.target.value)
    }

    return(
        <div className="post-container">
            <h2 className="posts-title"> {post.title} </h2>
            <p className="post-author">{post.user?.username}</p>
            <p className="post-body"> {post.body} </p>
            <h3 className="post-comments">Comments:</h3>
            <ul className="posts-list">
                {comments.map((comment) => {
                    return (<Comment 
                    comment={comment}
                    key={comment.id}
                    />)
                })} </ul>
            <form className="comment-form" onSubmit={handleSubmit}>
                <textarea className='comment-section' value={message} onChange={handleCommentChange} placeholder="Write your comment" />
                <button type="submit"> Add Comment </button>
            </form>
        </div>
    )

}

export default Post