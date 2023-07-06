import React from "react";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
import { Chat, DataSaverOff, MoreVert, SearchOutlined } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        
      <Avatar src="https://avatars.githubusercontent.com/u/120022514?v=4" />
        <div className="sidebar_headerRight">
        
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <DataSaverOff />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchOutlined />
          <input placeholder="Search for a chat" type="text" />
        </div>
      </div>
      <div className="sidebar_chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
