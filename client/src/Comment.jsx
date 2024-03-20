function Comment({comment}) {
    
    return(
        <div>
            <ul>{comment.user?.username}</ul>
            <ul>{comment.message}</ul>    
        </div>
    )
}

export default Comment