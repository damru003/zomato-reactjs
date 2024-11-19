import React, { useState } from 'react';
import './LoginPopup.css';

export const LoginPopup = ({setShowlogin}) => {

    const [state,setState] = useState("Login");

  return (
   <>
    <div className="login-popup">
        <form className='login-popup-container'>
            <div className="login-popup-title">
                <h2>{state}</h2>
                <img onClick={()=>setShowlogin(false) } src={'assets/cross_icon.png'}/>
            </div>
            <div className="login-popup-inputs">
                {state==="Login"?<></>:<input type='text' placeholder='Enter Your Name' required/>}
                <input type='email' placeholder='Enter Your Email Address' required/>
                <input type='password' placeholder='Enter Your Password' required/>
            </div>
            <button>{state==="Sign Up"?"Create Account":"Login Account"}</button>
            <div className="login-popup-condition">
                <input type='checkbox' required/>
                <p>By continuing, i agree to the terms of use and privacy policies</p>
            </div>
            {state==="Login"?<p onClick={()=> setState('Sign Up')}>Create a new Account? <span>Click here</span></p>
            :<p onClick={()=> setState('Login')}>Already have Account? <span>Login Here</span></p>}
        </form>
    </div>
   </>
  )
}