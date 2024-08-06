import React from 'react'
import './notice.css'

const notice = () => {
  return (
    <div className='noticeNav'>

        <div className='notice-input'>
          <h1 className='name-notice'>Notice</h1>
          <div className='notice-inputs-text'>
            <p>Your appointment date is 11/09/2024 in 11:30PM at KMC hospital</p>
            {/* <input className='text-inputs' type="text" placeholder='Filter'/>  */}
            
            {/* <button className='add-notice'>
              Add Notice
            </button>            */}
          </div>

          {/* <button className='add-notice'>
            Add Notice
          </button> */}
        </div>
          
    </div>
  )
}

export default notice
