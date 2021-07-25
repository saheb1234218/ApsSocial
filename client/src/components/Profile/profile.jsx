import React from 'react'
import Topbar from "../Topbar/Topbar"
import Leftbar from "../Leftbar/leftbar";
import Rightbar from "../rightbar/rightbar";
import Profilesection from "./profilesection";


function Profile() {
    return (
        <div style={{backgroundColor:'white'}}>
        <Topbar/>
        <div className="mid-container">
      <Leftbar/>
      <Profilesection/>
      <Rightbar/>
    </div>
        </div>
    )
}

export default Profile
