import React from 'react'
import './appointment.css'

import { useNavigate } from 'react-router-dom';

const appointment = () => {

  const navigate = useNavigate();

  const navigateToAddAppointment = () => {
    navigate('/addAppointment');
  }

  const navigateToUpdate = () => {
    navigate('/update');
  }

  const navigateToDelete = () => {
    navigate('/delete');
}

  return (
    <div className='appointment-container'>

      <button className='viewAppointments' onClick={() => navigateToAddAppointment('/addAppointment')}>
        <div className='viewAppointment-container'>Add Appointments</div>
      </button>

      <button className='viewAppointments' onClick={() => navigateToUpdate('/viewAppointment')}>
        <div className='viewAppointment-container'>Edit Appointments</div>
      </button>

      <button className='viewAppointments' onClick={() => navigateToDelete('/delete')}>
        <div className='viewAppointment-container'>Delete Appointments</div>
      </button>
      
      {/* <div className='header'>
        <div className='containers'>Appointments</div>
        <div className='underline'></div>
      </div> */}

      <div className='inputs'>

        {/* <div className='input'>
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
        </div> */}
        

      </div>
    </div>
  )
}

export default appointment
