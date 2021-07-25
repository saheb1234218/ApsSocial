import React from 'react'
import "./leftbar.css"
import {RssFeed,HelpOutline,WorkOutline,Event,School,Bookmark} from "@material-ui/icons";


function Leftbar() {
    return (
        <div className="left-container">
            <div className="leftwrapper">
                <ul className="leftlist">
                    <li className="lefticons">
                        <RssFeed/>
                        <span className="listtext">Feed</span>
                    </li>
                    <li className="lefticons">
                        <HelpOutline/>
                        <span className="listtext">Help</span>
                    </li>
                    <li className="lefticons">
                        <WorkOutline/>
                        <span className="listtext">Work</span>
                    </li>
                    <li className="lefticons">
                        <School/>
                        <span className="listtext">School</span>
                    </li>
                    <li className="lefticons">
                        <Bookmark/>
                        <span className="listtext">Bookmark</span>
                    </li>
                    <li className="lefticons">
                        <Event/>
                        <span className="listtext">Events</span>
                    </li>
                </ul>
                <ul className="leftlist2">
                    <li className="lefticons">
                        <img src="https://th.bing.com/th?q=Sad+People&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&adlt=moderate&t=1&mw=247" alt="" className="leftimage" />
                        <span className="imagetext">Apurba Ganguly</span>
                    </li>
                    <li className="lefticons">
                        <img src="https://th.bing.com/th?q=Sad+People&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&adlt=moderate&t=1&mw=247" alt="" className="leftimage" />
                        <span className="imagetext">Apurba Ganguly</span>
                    </li>
                    <li className="lefticons">
                        <img src="https://th.bing.com/th?q=Sad+People&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&adlt=moderate&t=1&mw=247" alt="" className="leftimage" />
                        <span className="imagetext">Apurba Ganguly</span>
                    </li>
                    <li className="lefticons">
                        <img src="https://th.bing.com/th?q=Sad+People&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&adlt=moderate&t=1&mw=247" alt="" className="leftimage" />
                        <span className="imagetext">Apurba Ganguly</span>
                    </li>
                    <li className="lefticons">
                        <img src="https://th.bing.com/th?q=Sad+People&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&adlt=moderate&t=1&mw=247" alt="" className="leftimage" />
                        <span className="imagetext">Apurba Ganguly</span>
                    </li>
                    <li className="lefticons">
                        <img src="https://th.bing.com/th?q=Sad+People&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&adlt=moderate&t=1&mw=247" alt="" className="leftimage" />
                        <span className="imagetext">Apurba Ganguly</span>
                    </li>
                    <li className="lefticons">
                        <img src="https://th.bing.com/th?q=Sad+People&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&adlt=moderate&t=1&mw=247" alt="" className="leftimage" />
                        <span className="imagetext">Apurba Ganguly</span>
                    </li>

                </ul>
            </div>
            </div>
        
    )
}

export default Leftbar
