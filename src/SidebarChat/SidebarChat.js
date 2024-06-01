import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";
// import db from "../firebaseSetup";

function SidebarChat({ addNewChat, name, id }) {
  let [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 500));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter name for chat room");
    if (roomName) {
      //save in db..and do other activities
      // db.collection("rooms").add({
      //   name: roomName,
      // });
    }
  };

  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar
        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}.svg`}
      />
      <div className="sidebarChat_info">
        <h3>{name}</h3>
        <p>last message..</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add new chat</h2>
    </div>
  );
}

export default SidebarChat;
