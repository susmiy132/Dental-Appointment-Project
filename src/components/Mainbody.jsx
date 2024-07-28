import React from 'react'
import "./Styles/mainbody.css";
import { useLocation } from 'react-router-dom';
import Dashboard from "./SidebarBtn/Dashboard/dashboard";
import Doctors from './SidebarBtn/Doctors/doctors';
import Appointment from "./SidebarBtn/Appointments/appointment";
import Settings from './SidebarBtn/Settings/settings';
import Feedback from './SidebarBtn/Feedback/feedback';
import Help from './SidebarBtn/HelpCenter/help';
import Profile from './navBarBtn/profile';
import Notice from './navBarBtn/notice';

const Mainbody = () => {

    const location=useLocation();
  console.log(location?.pathname) 
  return (
    <div className='main-container'>
      
{location?.pathname=="/dashboard" &&       <Dashboard/>}
{location?.pathname=="/doctors" &&       <Doctors/>}
{location?.pathname=="/appointment" &&       <Appointment/>}
{location?.pathname=="/settings" &&       <Settings/>}
{location?.pathname=="/feedback" &&       <Feedback/>}
{location?.pathname=="/help" &&       <Help/>}

{location?.pathname=="/profile" &&       <Profile/>}
{location?.pathname=="/notice" &&       <Notice/>}
    </div>
  )
}

export default Mainbody
