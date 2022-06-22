import "./NewChat.css";
import React, { useEffect, useState } from "react";

export const AddNewChat = ({ showNewChat, setNewChat }) => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:8500/chat/users");
      const jsonData = await response.json();
      const username = localStorage.getItem("username");
      setUsers(jsonData.filter((user) => user.username !== username));
    } catch (error) {
      console.log(error.message);
    }
  };

  const createChat = async (username_2) => {
    try {
      const username_1 = localStorage.getItem("username");
      const body = { username_1, username_2 };
      fetch("http://localhost:8500/chat/createchat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/Chat";
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {showNewChat ? (
        <div className="ContainerNew">
          {users.map((user) => (
            <tr key={user.username}>
              <td>
                <button
                  className="ButtonNewChats"
                  onClick={() => createChat(user.username)}
                >
                  {user.username}
                </button>
              </td>
            </tr>
          ))}
        </div>
      ) : null}
    </div>
  );
};
