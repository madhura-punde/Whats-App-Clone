import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import {
  ChatRounded,
  DonutLarge,
  MoreVertOutlined,
  SearchOutlined,
} from "@material-ui/icons";
import SidebarChat from "../SidebarChat/SidebarChat";
import db from "../firebaseSetup";
import { useStateValue } from "../StateProvider";

function Sidebar() {
  const [rooms, setRooms] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = db.collection("room names").onSnapshot((snapshot) =>
      //docs is an array
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar src={user?.photoURL} />
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>

          <IconButton>
            <ChatRounded />
          </IconButton>

          <IconButton>
            <MoreVertOutlined />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className="sidebar_chats">
        <SidebarChat addNewChat />
        {rooms.map((room) => (
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
      {/* div.sidebar_header */}
    </div>
  );
}

export default Sidebar;
