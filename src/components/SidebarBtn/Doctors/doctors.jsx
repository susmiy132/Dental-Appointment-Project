import React from 'react'
import './doctors.css';

import { useNavigate } from 'react-router-dom';
import Summi from '../../../assets/sus.png'
import Alora from '../../../assets/Alora.png'
import Fiona from '../../../assets/Fiona.jpg'
import Doctor from '../../../assets/Doctor.jpg'


const doctors = () => {

  const navigate = useNavigate();

  const navigateToAddAppointment = () => {
    navigate('/addAppointment');
  }


  return (
    <div className='doctors-container'>
      Doctors
      <div className='doctor-profile'>
        <div><img className='doctor-Img' src={Summi} alt="" /></div>
        <div className='doctors-inputs'>
          <li>Sagar Rana</li>
          <li>Dentist</li>
          <li>28 years</li>
          <li>Maitidevi</li>
          <li>5 years experience</li>
        </div>
        <button className='book-appointment' onClick={() => navigateToAddAppointment('/addAppointment')}>Book Appointments</button>
      </div>

      <div className='doctor-profile'>
        <div><img className='doctor-Img' src={Doctor} alt="" /></div>
        <div className='doctors-inputs'>
          <li>Fiona Shahi</li>
          <li>Dentist</li>
          <li>28 years</li>
          <li>Anamnagar</li>
          <li>4 years experience</li>
        </div>
        <button className='book-appointment' onClick={() => navigateToAddAppointment('/addAppointment')}>Book Appointments</button>
      </div>

      <div className='doctor-profile'>
        <div><img className='doctor-Img' src={Fiona} alt="" /></div>
        <div className='doctors-inputs'>
          <li>Elina Shahi</li>
          <li>Dentist</li>
          <li>28 years</li>
          <li>Kathmandu</li>
          <li>3 years experience</li>
        </div>
        <button className='book-appointment' onClick={() => navigateToAddAppointment('/addAppointment')}>Book Appointments</button>
      </div>

      <div className='doctor-profile'>
        <div><img className='doctor-Img' src={Alora} alt="" /></div>
        <div className='doctors-inputs'>
          <li>Alora Rai</li>
          <li>Dentist</li>
          <li>28 years</li>
          <li>Kathmandu</li>
          <li>4 years experience</li>
        </div>
        <button className='book-appointment' onClick={() => navigateToAddAppointment('/addAppointment')}>Book Appointments</button>
      </div>

    </div>
  )
}

export default doctors
