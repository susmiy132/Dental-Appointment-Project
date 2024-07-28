
import React from 'react'
import "./Styles/homepage.css"
import LoginSignup from './HomePage/LoginSignup'
import NavBar from './HomePage/navBar';
import Dental from './HomePage/Dental';
import Implants from './HomePage/Implants';

const homepage = () => {
  return (
    <div className='homepage-container'>

      <NavBar/>

      <LoginSignup/>

      <Dental/>

      <Implants/>


    </div>
      
  )
}

export default homepage
