import React from 'react'
import './navBar.css';

const navBar = () => {
  return (
    <nav className='menu-items'>
        <ul className='list-items'>
            <li>Home</li>
            <li>About</li>
            <li>Sign Up</li>
            <li>Contact us</li>
        </ul>
    </nav>
  )
}

export default navBar
