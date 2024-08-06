import React from 'react'
import './viewAppointments.css'


const viewAppointment = () => {

    

  return (
    <div className='appointment-container'>

        <div className='header'>
            <div className='containers'>Appointments</div>
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

            <div className='submits-container'>
                <button className='submits'>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default viewAppointment
