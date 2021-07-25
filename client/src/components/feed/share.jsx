import React from 'react'
import {PermMedia,Label,Room,EmojiEmotions} from "@material-ui/icons";
import { useState } from 'react';
import axios from 'axios';
import "./share.css";
import {useSelector} from "react-redux";
function Share() {

const userid=useSelector((state)=>state.reducer.user.id);
console.log(userid);

const [desc,setdesc]=useState("");

const onSubmit=()=>{
    axios.post("http://localhost:8800/api/post",{userId:userid,img:"",description:desc}).then((res)=>{
        console.log(res);
    }).catch((error)=>{
console.log(error);
    });
}



    return (
        <div className="share">
            <div className="sharewrapper">
                <div className="sharetop">
                    <img src="https://th.bing.com/th/id/OIP.W3AaiZfxABEo8ddCJLho3wHaHY?w=197&h=196&c=7&o=5&pid=1.7" alt="" className="shareimage" />
                    <input placeholder="What's in your mind Apurba?" onChange={(e)=>setdesc(e.target.value)} className="shareinput" />
                </div>
                <hr></hr>
                <div className="sharebottom">
                    <div className="shareoptions">
                        <div className="option">
                            <PermMedia htmlColor="tomato" className="shareicon"/>
                            <span className="optiontext">Photo or Video</span>
                        </div>
                        <div className="option">
                            <Label htmlColor="blue" className="shareicon"/>
                            <span className="optiontext">Tag</span>
                        </div>
                        <div className="option">
                            <Room htmlColor="green" className="shareicon"/>
                            <span className="optiontext">Location</span>
                        </div>
                        <div className="option">
                            <EmojiEmotions htmlColor="black" className="shareicon"/>
                            <span className="optiontext">Feelings</span>
                        </div>
                        
                    </div>
                    <button onClick={onSubmit} className="sharebtn">Post</button>
                </div>
            </div>
        </div>
        
    )
}

export default Share;

