import React from "react";
import "./chat.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Chat = () => {
  return (
    <div className="chat-container">
      <div className="chat-header">
        <div className="chat-chats">Gesprekken</div>
        <div className="chat-name">Bedrijfsnaam</div>
      </div>
      <div className="chat-body">
        <div className="chat-contacten">Contacten</div>
        <div className="chat-box">
          <div className="chat-box-chat"></div>
          <div className="chat-box-input">
            <input placeholder="Typ een bericht"></input>
            <ArrowForwardIcon></ArrowForwardIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
