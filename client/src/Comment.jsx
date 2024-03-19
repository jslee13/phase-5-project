function Comment({comment}) {

    

    return(
        <div>
            <ul>{comment.user_id}</ul>
            <ul>{comment.message}</ul>    
        </div>
    )
}

export default Comment