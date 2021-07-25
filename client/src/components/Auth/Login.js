import React from 'react';
import { useState } from 'react';
import axios from "axios";
import Wall from "../Wall/Wall";
import { useSelector,useDispatch } from 'react-redux';
import { User_Login ,User_Name} from '../../store/action';
const Login = () => {
    const dispatch=useDispatch();
    const [success,setsuccess]=useState(false);
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");

    const submitnow=()=>{
        try{
            axios.post("http://localhost:8800/api/auth/login",{email,password}).then((res)=>{
                console.log(res.data._id);
                dispatch(User_Login(res.data._id));
                dispatch(User_Name(res.data.username));
                
            }).catch((err)=>{
                console.log(err);
            });
         setsuccess(true);
            console.log(email,password)
        }
        catch(error){
            console.log(error)
        }
       
    }
    return (
        <>
        {success?<Wall/>:<div className="Register">
            <div className="Register-form">
                
                <input className="Register-input" onChange={(e)=>setemail(e.target.value)} placeholder="Enter Your Email"></input>
                <input className="Register-input" onChange={(e)=>setpassword(e.target.value)} placeholder="Enter Your Password"></input>
                 <button onClick={submitnow} className="Register-btn">Login Now</button> 

            </div>
            
        </div>}
        </>
        
    );
}

export default Login;
