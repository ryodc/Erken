import React, { useEffect, useState } from "react";
import "./chat.css";
import SidebarChat from "./sidebarchat.js";

const Chat = () => {
  // const [message, setMessage] = useState("");

  // const handle = () => {
  //   localStorage.setItem("Message", message);
  // };

  return (
    <div>
      <SidebarChat />
      {/* <ButtonChat /> */}
    </div>
  );
};
export default Chat;
