import React, { useState } from 'react'
import './loginSignup.css'
// import Dental from '../../assets/dental.jpg'
import user from '../../assets/users.png'
import email from '../../assets/email.png'
import password from '../../assets/padlock.png'
import Dent from '../../assets/DentalLab.png'

const LoginSignup = () => {

    const [action, setAction] = useState("Sign Up")
  return (
    <div className='signup-container'>
        <div className='DentImg'>
            <img src={Dent} alt="" />
        </div>
        <div className='container'>
            <div className='header'>
                <div className='text'> {action} </div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                
                {action==="Login"? <div></div>:<div className='input'>
                    <img src={user} alt="" />
                    <input type="text" placeholder='Name'/>
                </div>}

                

                <div className='input'>
                    <img src={email} alt="" />
                    <input type={email} placeholder='Email Id'/>
                </div>

                <div className='input'>
                    <img src={password} alt="" />
                    <input type="password" placeholder='Password'/>
                </div>

            </div>
            {action==="Sign Up"? <div></div>:<div className="forgot-password">Lost Password? <span>Click Here!</span></div>}

            <div className='submit-container'>
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}> Sign Up </div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>

        </div>
    </div>
  )
}

export default LoginSignup
