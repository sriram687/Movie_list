import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav className='navbar'>
            <div className='nav-brands'>
                <Link to='/'>Movie App</Link>
            </div>
            <div className='nav-links'>
                <Link to='/' className="nav-link">Home</Link>
                <Link to='/favorites' className='nav-link'>Favorites</Link>
            </div>
        </nav>
    )
}

export default NavBar