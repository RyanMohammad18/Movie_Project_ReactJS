import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="headerLeft">
            <Link to="/"> <h1>Movie Project</h1> </Link>
            <Link to="/movies/popular"> <span>Popular</span>  </Link>
            <Link to="/movies/top_rated"><span>Top Rated</span> </Link>
            <Link to="/movies/upcoming"> <span>Upcoming</span> </Link>
        </div>
        
    </div>
  )
}

export default Header