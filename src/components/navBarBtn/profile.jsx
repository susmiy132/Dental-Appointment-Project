import React from 'react'
import './profile.css'
import { useNavigate } from 'react-router-dom';
import Susmi from "../../assets/sus.png"
import Edit from "../../assets/threedots.png"
import Logout from "../../assets/logout.png"

const profile = () => {
  const navigate = useNavigate();

  const navigateToEdit = () => {
    navigate('/edit');
  }


  return (
    <div className='profileNav'>
        <div className='user-container'>
            <img className='userImg' src={Susmi} alt="" />
            <div className='userName'>Susmita Rana</div>
        </div>

        <div className='edit-items'>
          <button className='p-edit' onClick={() => navigateToEdit('/edit')}>
            <img className='p-edit-img' src={Edit} alt="" />
            <div className='p-edit-text'>Edit</div>
          </button>
          <button className='p-logout'>
            <img className='p-log-img' src={Logout} alt="" />
            <div className='p-log-text'>Logout</div>
          </button>
        </div>
    </div>
  )
}

export default profile
