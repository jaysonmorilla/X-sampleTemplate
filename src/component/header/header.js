import React from 'react'
import Navbar from './navbar'
import Searchbox from './searchbox'

const header = (props) => {
    return (
        <header className='header'>
            <div className='header-flex'>
                <h2>Title</h2>
                <Navbar />
            </div>
        </header>
    )
}

export default header;