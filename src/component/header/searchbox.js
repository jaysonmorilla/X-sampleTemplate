import React from 'react'

const search = (props) => {
    return (
        <div className='search-box'>
            <label>Search: </label>
            <input type='text' name='search' placeholder='Search...' />
        </div>
    )
}

export default search;