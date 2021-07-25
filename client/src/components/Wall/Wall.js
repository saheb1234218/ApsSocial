import React from 'react';
import Feed from "../feed/feed";
import Topbar from "../Topbar/Topbar";
import Rightbar from "../rightbar/rightbar";
import Leftbar from "../Leftbar/leftbar";
const Wall = () => {
    return (
        <div>
            <Topbar/>
    <div className="mid-container" style={{display:'flex',background:'white'}}>
    <Leftbar/>
    <Feed/>
    <Rightbar/>
    </div>
        </div>
    );
}

export default Wall;
