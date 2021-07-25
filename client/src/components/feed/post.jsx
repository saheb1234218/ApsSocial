import {useState} from 'react'
import "./post.css";
import {MoreVert,ThumbUp,ThumbDown,Favorite} from '@material-ui/icons';
import {Posts} from "./dummy";

function Post() {
    
    return (
        <>
        {Posts.map((value)=>{
            return (
                <div className="post">
            <div className="postwrapper">
                <div className="posttop">
                    <div className="profile">
                    <img src="https://th.bing.com/th/id/OIP.W3AaiZfxABEo8ddCJLho3wHaHY?w=197&h=196&c=7&o=5&pid=1.7" alt="" className="profilepic" />
                    <span className="profilename">Apurba Ganguly</span>
                    </div>
                    <MoreVert style={{cursor:'pointer'}}/>
                </div>
                <div className="centre">
                <span className="postdes">{value.desc}</span>
                    <img src={value.photo} alt="" className="postpic" />
                    
                </div>
                <div className="bottom">
                    <ThumbUp htmlColor="blue" className="btmicn"/>
                    <ThumbDown htmlColor="blue" className="btmicn"/>
                    <Favorite htmlColor="tomato" className="btmicn"/>
                    {value.like} likes
                </div>
            </div>
        </div>
            )
        })}
        
        </>
    )
}

export default Post
