function GroupFilterBar({searchString, setSearchString}){

    function handleSearch(e){
        const searchInput = e.target.value
        setSearchString(searchInput)
    }

    return(
        <div className="search">
            <input 
                type="text" 
                placeholder="Search K-pop Group"
                value={searchString} 
                onChange={handleSearch}>

            </input>
        </div>
    )
}

export default GroupFilterBar;