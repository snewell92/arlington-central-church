import React from 'react'
import Link from 'gatsby-link'

const NavBar = () => {
  return (
    <nav className='navbar is-fixed-top' aria-label='main navigation'>
      <div className='navbar-brand'>
        <Link to='/' className='navbar-item'>
          ACC
        </Link>
        <button className='button navbar-burger' data-target='navMenu'>
          <span />
        </button>
      </div>
      <div className='navbar-menu' id='navMenu'>
        <div className='navbar-start'>
          <Link className='navbar-item' to='/giving'>
            Giving
          </Link>
          <Link className='navbar-item' to='/contact'>
            Contact
          </Link>
          <Link className='navbar-item' to='/materials'>
            Materials
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
