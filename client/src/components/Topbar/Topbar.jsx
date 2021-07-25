import React from 'react';
import {Search,Person,Chat,Notifications} from '@material-ui/icons';
import "./Topbar.css";

function Topbar() {
    return (
        <div className="container">
            <div className="topleftbar">
                <span className="logo">APS Social</span>
            </div>
            <div className="topcentre">
                <div className="searchbar">
                    <Search className="searchicon"/>
                    <input placeholder="Search for friend, post or video" className="searchinput" />
                </div>
            </div>
            <div className="toprightbar">
                <div className="links">
                <span className="topbarlink">Homepage</span>
                <span className="topbarlink">Timeline</span>
            
                </div>
                
            <div className="topbaricons">
                <div className="topbariconitems">
                    <Person/>
                    <span className="topbariconbadge">1</span>
                </div>
                <div className="topbariconitems">
                    <Chat/>
                    <span className="topbariconbadge">2</span>
                </div>
                <div className="topbariconitems">
                    <Notifications/>
                    <span className="topbariconbadge">45</span>
                </div>
                
            </div>
            <img src="https://www.bing.com/th?id=OIP.5QBdGs1vwFCCmpdEIWL7cQHaE8&w=152&h=101&c=8&rs=1&qlt=90&pid=3.1&rm=2" alt="" className="topbarprofile" />
        </div>
        </div>
        
    )
}

export default Topbar;

