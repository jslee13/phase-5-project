function Comment({comment}) {
    
    return(
        <div className="comment">
            <p className="comment-user">{comment.user?.username}:</p>
            <ul className="comment-message">{comment.message}</ul>    
        </div>
    )
}

export default Comment