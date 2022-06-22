import React, { useEffect, useState } from "react";
import "./sidebarchat.css";
import { OpenNewChat } from "./openchat"
import { SidebarData } from "../Chat/sidebarchatData";

const Sidebar = () => {

    const [OpenChatTest, setOpenChatTest] = useState(true);

    // const [usersChat, setUsersChat] = useState([]);
    // const [OpenChatTest, setOpenChatTest] = useState(false);

    // const getUserChat = async (e) => {
    //     try {
    //         const username = localStorage.getItem('username')
    //         const gettingChats = await fetch(`http://localhost:8500/chat/showchats/${username}`);
    //         const jsonDataChats = await gettingChats.json();
    //         setUsersChat(jsonDataChats);
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // };



    // const toggleChat = async (username_1, username_2, chat_id) => {

    //     if (localStorage.getItem("username") == username_1) {
    //         localStorage.setItem("chat_username_1", username_1);
    //         localStorage.setItem("chat_username_2", username_2);
    //     } else {
    //         localStorage.setItem("chat_username_1", username_2);
    //         localStorage.setItem("chat_username_2", username_1);
    //     }
    //     localStorage.setItem("chat_id", chat_id);
    //     setOpenChatTest((prev) => !prev);
    // };

    //  function ShowCorrectUser(Username1, Username2) {
    //     if (localStorage.getItem("username") == Username1) {
    //         return Username2;
    //     } else {
    //         return Username1;
    //     }
    // }

    // useEffect(() => {
        // getUserChat();
    // }, []);

    // const listItems = usersChat.map((chatData) => <button className="ButtonCheckChat" onClick={() => toggleChat(chatData.username_1, chatData.username_2, chatData.chat_id)}>{ShowCorrectUser(chatData.username_1, chatData.username_2)}</button>);
    // const listItems = 
    
    return (
        <div>
            <OpenNewChat OpenChatTest={OpenChatTest} />

            <div className="Sidebarchat">
                <div className="HeaderChat">
                    Your chats 
                </div>
                <div className="ListItems">
                    {SidebarData.map((val, key) => {
                        return (
                            <li
                            key={key}
                            className={val.cName}
                            >
                                <button className = "ButtonCheckChat">
                                    <span>{val.Bedrijf}</span>
                                </button>
                            </li>
                        );
                    })}
                    {/* {listItems}  */}
                </div>
            </div>

        </div>
    );
}
export default Sidebar;