import { Avatar } from '@mui/material'
import React from 'react'
import './SidebarChat.css'

function SidebarChat() {
  return (
    <div className="sidebar_chat">
        <Avatar />
        <div className='sidebar_chatInfo'>
            <h4>Name</h4>
            <p>This is the lastMessage</p>
        </div>
    </div>
  )
}

export default SidebarChat