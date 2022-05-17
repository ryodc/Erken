import React from "react";
import "./sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar">
        <div className="sidebarHead">
            <h1>Sidebar</h1>
        </div>
        <div className="sidebarBody">
            <div className="sidebarBodyItem">
            <h2>Feed</h2>
            </div>
            <div className="sidebarBodyItem">
            <h2>Agenda</h2>
            </div>
            <div className="sidebarBodyItem">
            <h2>Chat</h2>
            </div>
            <div className="sidebarBodyItem">
            <h2>Profile</h2>
            </div>
        </div>
        </div>
    );
}