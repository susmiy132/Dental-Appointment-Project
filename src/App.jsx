import React from 'react'
import './index.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import HomePage from './components/homepage'

// import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
// import Mainbody from './components/Mainbody';

const App = () => {
  return (
    <Router>
      <div className='dashboard'>

        <HomePage/>


        {/* <Navbar/>
        
        <Sidebar/>

        <Mainbody/> */}
       
      
      
      </div>
    
    </Router>
  )
}

export default App
