import React from 'react'
import './feedback.css';

const feedback = () => {


  return (
    <div className='feedback-container'>
        FeedBack
        
        <div className='feedback-items'>
          <button className='update-feed'> Update FeedBack</button> 
          <button className='delete-feed'> Delete FeedBack</button> 
          <div className='feed-inputs'>
            <input className='text-feed' type="text" placeholder='Title'/> 
            <input className='text-feed' type="text" placeholder='Discriptions'/>
            
            <button className='add-feed'> Add FeedBack</button>           
          </div>
        </div>
      
    </div>
  )
}

export default feedback
