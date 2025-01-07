import React, { useState,useEffect, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom';
import Header from './Navbar';
import { StoreContext } from './StoreContext';
import axios from 'axios'

const Login = ({setShowlogin}) => {
    

    const {url,setToken}=useContext(StoreContext);

        const [currState,setCurrstate]=useState('Sign Up');

      const [data,setData]=useState({
        name:"",
        email:"",
        password:""
    })

    const onChangeHandler=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
    
    
        setData(data=>({...data,[name]:value}))
    
    
    }
    const onLogin=async (e)=>{
        e.preventDefault();
        console.log("onlogin function");
        let newurl=url;
        if(currState==="Login"){
            newurl+="/api/user/login"
        }
        else{
            newurl+="/api/user/register"
        }
        

        const resp=await axios.post(newurl,data);

        if(resp.data.success){
            //means we got login successfull so we will get one token
            //we use a state variable to store token and lets create that varible inside storeContext.jsx
            setToken(resp.data.token);
            localStorage.setItem("token",resp.data.token);
            setShowlogin(false)
        }
        else{
            alert(resp.data.message)
        }


    }


       
    


      useEffect(()=>{
        console.log(data);
    
    
    },[data])
    

  return (
    <>
    <form onSubmit={onLogin}  action="" className='login-popup-container'>

        {currState==="Login"?<h2>Login Form</h2>:<h2>Signup Form</h2>}

    {currState==="Login"?<></>:                <input type="text" placeholder='Your name' name='name' onChange={onChangeHandler} value={data.name} required />
                }
                <br /> <br />
                <input type="email" name="email" id="email" placeholder='Your Email' onChange={onChangeHandler} value={data.email} required />
                <br /><br />
                <input type="password" name="password" onChange={onChangeHandler} value={data.password} id="password" placeholder='password' required />
                <br /> <br />
                <button>{currState==='Sign Up' ? "Create Account" :"Login"}</button>
                <br />
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, i agree to the terms of use & privacy policy</p>
                </div>
                {currState==='Login'?                <p>Create a new account? 
                    <span onClick={()=>setCurrstate('Sign Up')}>click here</span></p>:                
                    <p>Already have an account?
                         <span onClick={()=>setCurrstate('Login')}>Login here</span></p>
                }
    </form>
    </>
  )
}

export default Login
