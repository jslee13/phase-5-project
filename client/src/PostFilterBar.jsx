function PostFilterBar({searchString, setSearchString}){

    function handleSearch(e){
        const searchInput = e.target.value
        setSearchString(searchInput)
    }

    return(
        <div className="search">
            <input 
                type="text" 
                placeholder="Search Post"
                value={searchString} 
                onChange={handleSearch}>

            </input>
        </div>
    )
}

export default PostFilterBar;