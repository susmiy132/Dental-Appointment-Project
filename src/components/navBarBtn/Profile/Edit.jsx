import React from 'react'
import './edit.css'


const Edit = () => {
  return (
    <div className='edits-containers'>
        
        <div className='updates-items'> update your details
            <div className='editProfileDetails'>
                <input className='updateProfileItems' type="text" placeholder='Name' />
                <input className='updateProfileItems' type="text" placeholder='Current Password' />
                <input className='updateProfileItems' type="text" placeholder='New Password'/>
            </div>

            <button className='p-update-Btn'>Update</button>

        </div>
    </div>
  )
}

export default Edit
