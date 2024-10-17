import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import db from "../firebaseSetup";

function SidebarChat({ addNewChat, name, id }) {
  let [seed, setSeed] = useState("");
  let [msg, setMsg] = useState("");

  useEffect(() => {
    if (id) {
      db.collection("room names")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMsg(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [id]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 500));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter name for chat room");
    if (roomName) {
      //save in db..and do other activitiess
      db.collection("room names").add({
        name: roomName,
      });
    }
  };

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar
          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}.svg`}
        />
        <div className="sidebarChat_info">
          <h3>{name}</h3>
          <p>
            {/* last message.. */}
            {msg[0]?.message ? msg[0].message : ""}
          </p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add new chat</h2>
    </div>
  );
}

export default SidebarChat;
