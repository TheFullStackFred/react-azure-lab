import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header id='header'>
      <div id='navbar'>
        <h1 className='logo'>
          <i className='fa-brands fa-github'></i>
          <span className='logo-text'> Fred's</span> App
        </h1>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
