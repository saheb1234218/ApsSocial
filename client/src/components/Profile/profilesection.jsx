import React from 'react'
import "./profilesection.css";
import {MoreVert,ThumbUp,ThumbDown,Favorite} from "@material-ui/icons"


function Profilesection() {
    return (
        <div className="profilesec">
            <div className="profilesecwrapper">
                <div className="profiletop">
                <img src="https://th.bing.com/th/id/OIP.dJDwTz9MBwwzzXTdpacPLQHaEo?w=303&h=187&c=7&o=5&pid=1.7" alt="" className="coverpic" />
                <img src="https://www.bing.com/th?id=OIP.5QBdGs1vwFCCmpdEIWL7cQHaE8&w=152&h=101&c=8&rs=1&qlt=90&pid=3.1&rm=2" alt="" className="profilesecprofilepic" />
                <h2 >Alison James</h2>
                <h4 style={{marginTop:'-20px'}}>(James)</h4>
                <span style={{marginTop:'-10px'}}>Life is a mystery live it or think of it</span>
                </div>
                <div className="post">
            <div className="postwrapper">
                <div className="posttop">
                    <div className="profile">
                    <img src="https://www.bing.com/th?id=OIP.5QBdGs1vwFCCmpdEIWL7cQHaE8&w=152&h=101&c=8&rs=1&qlt=90&pid=3.1&rm=2" alt="" className="profilepic" />
                    <span className="profilename">ALison James</span>
                    </div>
                    <MoreVert style={{cursor:'pointer'}}/>
                </div>
                <div className="centre">
                <span className="postdes">Really nice adventure</span>
                    <img src="https://th.bing.com/th/id/OIP.wMdq7Mkv2piQSw0eIIPggwHaEK?w=333&h=187&c=7&o=5&pid=1.7" alt="" className="postpic" />
                    
                </div>
                <div className="bottom">
                    <ThumbUp  htmlColor="blue" className="btmicn"/>
                    <ThumbDown  htmlColor="blue" className="btmicn"/>
                    <Favorite htmlColor="red" className="btmicn"/>
                    4 likes
                    <span className="btmicn">4 Comments</span>
                </div>
            </div>
        </div>
            </div>

        </div>
        
    )
}

export default Profilesection
