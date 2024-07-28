import React from 'react'
import './profile.css'
import Susmi from "../../assets/sus.png"

const profile = () => {
  return (
    <div className='profileNav'>
        <div className='user-container'>
            <img className='userImg' src={Susmi} alt="" />
            <div className='userName'>Susmita Rana</div>
        </div>
    </div>
  )
}

export default profile
