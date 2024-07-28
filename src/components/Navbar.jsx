import React from 'react'
import "./Styles/navbar.css"
import { useNavigate } from 'react-router-dom';
import notifications from "../assets/notifications.png";
import profile from "../assets/profiles.png";

const Navbar = () => {

  const navigate = useNavigate();

  const navigateToProfile = () => {
    navigate('/profile');
  }

  const navigateToNotice = () => {
    navigate('/notice');
  }

  return (
    <div className='header-container'>

      <div className='center-container'>
        <input className='search-container' type="text" name="" id="" placeholder='search'/>
        <button className='btnNotice' onClick={() => navigateToNotice('/notice')}> 
          <img className='notification' src={notifications} alt="" /> 
        </button>
      </div>


      <button className='right-container' onClick={() => navigateToProfile('/profile')}>
        <img className='profileImg' src={profile} alt="" />          
        <span className='profile'>Susmita Rana</span>
      </button>
      
    
    </div>
  )
}

export default Navbar
