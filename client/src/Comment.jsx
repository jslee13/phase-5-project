function Comment({comment}) {
    
    return(
        <div className="comment">{comment.user?.username}:
            <ul className="comment-message">{comment.message}</ul>    
        </div>
    )
}

export default Comment