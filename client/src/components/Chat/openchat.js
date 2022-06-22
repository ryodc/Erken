import React, { useState, useEffect } from "react";
import "./openchat.css";
import SendIcon from "@mui/icons-material/Send";
import Input from "@mui/material/Input";

export const OpenNewChat = ({ OpenChatTest, ExitChat }) => {
  return (
    <div className="ContainerChat">
      {OpenChatTest ? (
        <div className="MainMessageMenu">
          <div className="headerChat">Henk</div>
          <div className="MainMessage">{/* {ListAllMessages} */}</div>
          <div className="ContainerMessage">
            <form>
              <Input
                type="text"
                className="box"
                required
                minLength="1"
                placeholder="Typ een bericht"
                endAdornment={<SendIcon />}
                // value={SendMessage}
                // onChange={(e) => SetSendMessage(e.target.value)}
              />
              {/* <button onClick={() => onSumbitForm()}
                                className="SendButton"
                            >
                                Send
                            </button> */}
            </form>
            {/* <button onClick={GetMessagesFromUser}>Refresh</button> */}
          </div>
        </div>
      ) : null}
    </div>
  );
};
