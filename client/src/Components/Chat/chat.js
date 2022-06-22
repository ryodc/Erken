import React, { useEffect, useState } from "react";
import "./chat.css";
import SidebarChat from "./sidebarchat.js";

import Sidebar from "../Default/sidebar";

const Chat = () => {
  // const [message, setMessage] = useState("");

  // const handle = () => {
  //   localStorage.setItem("Message", message);
  // };

  return (
    <div>
      <Sidebar />
      <SidebarChat />
      {/* <ButtonChat /> */}
    </div>
  );
};
export default Chat;
