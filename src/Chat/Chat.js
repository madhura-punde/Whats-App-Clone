import React, { useState, useEffect } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  InsertEmoticon,
  MicNone,
  MoreVert,
  SearchOutlined,
} from "@material-ui/icons";
import { useParams } from "react-router-dom";
import db from "../firebaseSetup";
import firebase from "firebase/compat/app";
import { useStateValue } from "../StateProvider";

function Chat() {
  let [seed, setSeed] = useState("");
  let [input, setInput] = useState("");
  let [roomName, setRoomName] = useState("");
  let [messages, setMessages] = useState([]);
  const [{ user }, dispatch] = useStateValue();
  let { roomId } = useParams();

  useEffect(() => {
    if (roomId) {
      db.collection("room names")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));

      db.collection("room names")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [roomId]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 500));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("room names").doc(roomId).collection("messages").add({
      message: input,
      name: user.displayName, //global user from data layer
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar
          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`}
        />

        <div className="chat_headerInfo">
          <h4>{roomName}</h4>
          <p>
            Last seen{" "}
            {new Date(
              messages[messages.length - 1]?.timestamp?.toDate()
            ).toUTCString()}
          </p>
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
        {messages &&
          messages.map((msg) => {
            return (
              <p
                key={msg.id}
                className={`chat_message ${
                  msg.name === user.displayName && `chat_receiver`
                }`}
              >
                <span className="chat_name">{msg.name}</span>
                {msg.message}
                <span className="chat_timeline">
                  {new Date(msg.timestamp?.toDate()).toUTCString()}
                </span>
              </p>
            );
          })}
      </div>
      <div className="chat_footer">
        <InsertEmoticon />

        <form>
          <input
            placeholder="Type a message"
            type="string"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" onClick={sendMessage}>
            Send a message
          </button>
        </form>

        <MicNone />
      </div>
    </div>
  );
}

export default Chat;
