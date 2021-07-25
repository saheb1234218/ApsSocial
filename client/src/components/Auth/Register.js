import React from 'react';
import { useState } from 'react';
import "./Auth.scss";
import Login from './Login';
const Register = () => {
    const [hasreg,sethasreg]=useState(false);
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");

    const submitnow=()=>{
        console.log(name,email,password)
    }
    return (
       <>
       {hasreg?<Login/>: <div className="Register">
            <div className="Register-form">
                <input className="Register-input" onChange={(e)=>setname(e.target.value)} placeholder="Enter Your Name"></input>
                <input className="Register-input" onChange={(e)=>setemail(e.target.value)} placeholder="Enter Your Email"></input>
                <input className="Register-input" onChange={(e)=>setpassword(e.target.value)} placeholder="Enter Your Password"></input>
                 <button onClick={submitnow} className="Register-btn">Register Now</button> 
                 <span onClick={()=>sethasreg(true)} className="Register-txt">Already Registered? Login In</span>

            </div>
            
        </div>}
      
       </>
        
    );
}

export default Register;
