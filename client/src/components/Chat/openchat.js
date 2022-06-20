import React, { useState, useEffect } from "react";
import "./openchat.css"

export const OpenNewChat = ({ OpenChatTest, ExitChat }) => {
    
    return (
        <div className="ContainerChat">
            {OpenChatTest ? (
                <div className="MainMessageMenu">
                    <div className="headerChat">You are chatting with </div>
                    <div className="MainMessage">
                        {/* {ListAllMessages} */}
                    </div>
                    <div className="ContainerMessage">
                        <form>
                            <input 
                                type="text"
                                className="box"
                                required
                                minLength="1"
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
}