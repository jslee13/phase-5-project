import { useState, useEffect } from "react"
import Comment from './Comment';

function Post({post}) {

    const [message, setMessage] = useState("")
    const [comments, setComments] = useState(post.comments)
    
    async function handleSubmit (event) {
        event.preventDefault()
        
         setMessage('');
        const new_comment = { message, post_id: post.id } 
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
        <div>
            <h2> {post.title} </h2>
            <p> {post.body} </p>
            <h3>Comments:</h3>
            <ul className="posts-list">
                {comments.map((comment) => {
                    return (<Comment 
                    comment={comment}
                    key={comment.id}
                    />)
                })} </ul>
            <form onSubmit={handleSubmit}>
                <textarea className='comment-section' value={message} onChange={handleCommentChange} placeholder="Write your comment" />
                <button type="submit"> Add Comment </button>
            </form>
        </div>
    )

}

export default Post