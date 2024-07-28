import React from 'react'
import './appointment.css'

const appointment = () => {
  return (
    <div className='appointment-container'>
      
      <div className='header'>
        <div className='container'>Appointments</div>
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

        <div className='submit-container'>
          <button className='submit'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default appointment
