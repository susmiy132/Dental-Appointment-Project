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
import ViewAppointment from './SidebarBtn/Appointments/ViewAppointments/viewAppointment';
import Update from './SidebarBtn/Appointments/ViewAppointments/Update'
import Delete from './SidebarBtn/Appointments/ViewAppointments/Delete'
import Edit from './navBarBtn/Profile/Edit';


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

{location?.pathname=="/addAppointment" &&       <ViewAppointment/>}

{location?.pathname=="/update" &&       <Update/>}

{location?.pathname=="/delete" &&       <Delete/>}

{location?.pathname=="/edit" &&       <Edit/>}
    </div>
  )
}

export default Mainbody
