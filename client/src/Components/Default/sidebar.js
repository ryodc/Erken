import React from "react";
import "../Default/sidebar.css";
import { SidebarData } from "../Default/sidebardata";
import { Link } from "react-router-dom";
import logo from "../Images/ErkenLogoScalable.png";
import { BrowserRouter } from "react-router-dom";

import LogoutIcon from '@mui/icons-material/Logout';


function Sidebar({ setAuth }) {




  return (
    <BrowserRouter>
      <div>
        <div className="Sidebar">
          <div className="Header">
            <h1 className="logo">
              <font color="DF482E">Er</font>
              <font color="273677">ken</font>
            </h1>
          </div>
          <ul className="SidebarList">
            {SidebarData.map((val, key) => {
              return (
                <li
                  key={key}
                  className={val.cName}
                  id={window.location.pathname === val.path ? "active" : ""}
                  onClick={() => {
                    window.location.pathname = val.path;
                  }}
                >
                  <Link to={val.path}>
                    <div id="icon" title={val.title}>
                      {val.icon}
                    </div>
                    <span>{val.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Sidebar;
