import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { AddNewChat } from "../Chat/NewChat";
import "../Chat/ButtonChat.css";

function AddChatButton() {
  const [showNewChat, setNewChat] = useState(false);

  const openNewChat = () => {
    setNewChat((prev) => !prev);
  };

  return (
    <div>
      <AddNewChat showNewChat={showNewChat} setNewChat={setNewChat} />
      <button className="ButtonNewChat" onClick={openNewChat}>
        <AddIcon id="Size2" />
      </button>
    </div>
  );
}

export default AddChatButton;
