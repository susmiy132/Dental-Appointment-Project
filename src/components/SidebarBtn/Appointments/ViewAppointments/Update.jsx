import React from 'react'
import './Update.css'

const Update = () => {
  return (
    <div className='update-container'>
        <div className='header'>
            <div className='containers'>Update Your Details</div>
            <div className='underline'></div>
        </div>

      <div className='inputs'>

        <div className='input'>
          <img src="" alt="" />
          <input type="text" placeholder='Patient Name'/>
        </div>

        <div className='input'>
          <img src="" alt="" />
          <input type="date" placeholder='Date'/>
        </div>


        <div className='input'>
          <img src="" alt="" />
          <input type="time" placeholder='Time'/>
        </div>
        
        <div className='input'>
          <img src="" alt="" />
          <input type="number" placeholder='Phone Number'/>
        </div>

        <div className='input'>
          <img src="" alt="" />
          <input type="text" placeholder='Doctor Name'/>
        </div>

        <div className='input'>
          <img src="" alt="" />
          <input type="text" placeholder='Clinic Name'/>
        </div>

        <div className='updateItem'>
          <button className='updatebtn'>Update</button>
        </div>
        

      </div>
    </div>
  )
}

export default Update
