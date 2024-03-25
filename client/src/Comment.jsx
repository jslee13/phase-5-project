function Comment({comment}) {
    
    return(
        <div className="comment">{comment.user?.username}:
            {/* <p className="comment-user">{comment.user?.username}:</p> */}
            <ul className="comment-message">{comment.message}</ul>    
        </div>
    )
}

export default Comment