import React, { useState } from 'react'
import Login from './Login';
import { Link, NavLink } from 'react-router-dom';
import Header from './Navbar';

const Home = () => {
      const [showLogin,setShowlogin]=useState(false);
    
  return (
    <div>
        Home page
        <Header />
            
           {setShowlogin?<Login setShowlogin={setShowlogin}/>:<></>} 
        
           {/* <Signup/> */}
        
    
    </div>
  )
}

export default Home
