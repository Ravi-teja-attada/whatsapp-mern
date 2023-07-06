import React, { useState } from "react";
import "./Chat.css";
import axios from "./axios";
import {  SearchOutlined,AttachFile, MoreVert, InsertEmoticon, MicNoneRounded } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
function Chat({messages}) {

  const [input, setInput] = useState('')

  const sendMsg = async (e)=>{
    e.preventDefault();
    await axios.post('/messages/new', {
      message: input,
      name: "Qwerty",
      timestamp: "timestring",
      recieved: true
    });

    setInput("");
  }
  
  return (
    <div className="chat">
    <div className="chat_header">
      <Avatar />
      <div className="chat_headerInfo">
        <h4>Name</h4>
        <p>Last seen ...</p>
      </div>
         <div className="chat_headerRight">
         <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
         </div>
         </div>
         <div className="chat_body">
          {messages.map(message => 
            <div className= {`chat_message ${message.recieved && "chat_send"}`}>
            <p>
            <span className="chat_name">{message.name}</span>
            {message.message}
            <span className="message_timeStamp">{message.timestamp}</span>
            </p>
          </div>
          )}
         </div>
         <div className="chat_footer">
          <InsertEmoticon />
          <form onSubmit={sendMsg}>
            <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Type a message" type="text" />
            <button type="submit" onClick={sendMsg}><MicNoneRounded /></button>
          </form>
          
          <MicNoneRounded />
          
          
         </div>
    </div>
  );
}

export default Chat;
