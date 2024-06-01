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

function Chat() {
  let [seed, setSeed] = useState("");
  let [input, setInput] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 500));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("submitted", input);

    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar
          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`}
        />

        <div className="chat_headerInfo">
          <h4>Room name</h4>
          <p>Last seen at...</p>
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
        <p className={`chat_message ${true && `chat_receiver`}`}>
          <span className="chat_name">Madhura Punde</span>Hey Guys
          <span className="chat_timeline">11.42AM</span>
        </p>

        <p className="chat_message">Hey Guyssssss</p>
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
