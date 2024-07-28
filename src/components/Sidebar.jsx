import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Styles/sidebar.css"
import logo from "../assets/logo.jpg";
import notices from "../assets/notices.png";
import feedback from "../assets/feed.png";
import doctor from "../assets/threedots.png"
import dash from "../assets/home.png";
import appointment from "../assets/book.png";
import setting from "../assets/setting.jpg"

const Sidebar = () => {

  const navigate = useNavigate();

  const navigateToDashboard = () => {
    navigate('/dashboard');
  }
  const navigateToDoctors = () => {
    navigate('/doctors');
  };

  const navigateToAppointment = () => {
    navigate('/appointment');
  };

  const navigateToFeedback = () => {
    navigate('/feedback');
  };

  const navigateToSettings = () => {
    navigate('/settings');
  };

  const navigateToHelpCenter = () => {
    navigate('/help');
  };
 
  return (
    <div className='menu'>
      <h1 className='dentalheadings'> <img className='logoImg' src={logo} alt="" />DentalDates </h1>
      

      <div className='menu-items'>

        <button className='btndashboard' onClick={() => navigateToDashboard('/dash')}>
          <img className='dashImg' src={dash} alt="" /> 
          <div className='textdash'>Dashboard</div>
        </button>
        

        <button className='btndoctor' onClick={() => navigateToDoctors('/doctors')}>
          <img className='doctorImg' src={doctor} alt="" /> 
          <div className='textdoctor'>Doctor</div>
        </button>

      
        <button className='btnappointments' onClick={() => navigateToAppointment('/appointment')}>
          <img className='appointmentImg' src={appointment} alt="" /> 
          <div className='textappointments'>Appointments</div>
        </button>


        <button className='btnsetting' onClick={() => navigateToSettings('/attendance')}>
          <img className='settingImg' src={setting} alt="" />
          <div className='textsetting'>Setting</div>
        </button>


        <button className='btnfeed' onClick={() => navigateToFeedback('/feedback')}>
          <img className='feedbackImg' src={feedback} alt="" /> 
          <div className='textfeedback'>Feedback</div>
        </button>
          
          
        <button className='btnhelpCenter' onClick={() => navigateToHelpCenter('/help')}>
          <img className='helpImg' src={notices} alt="" /> 
          <div className='textHelp'>Help Center</div>
        </button>


      </div>
    </div>
  )
}

export default Sidebar
