import React from 'react'
import "./feed.css";
import Share from "./share";
import Post from "./post"
function Feed() {
    return (
        <div className="fed-container">
            
            <Share/>
            <Post/>
            <Post/>
        </div>
    )
}

export default Feed
