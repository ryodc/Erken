import React, { useState } from "react";
import "./profileinfo.css";

import SearchIcon from "@mui/icons-material/Search";
import AttachmentIcon from "@mui/icons-material/Attachment";
import LockIcon from "@mui/icons-material/Lock";

import EditProfile from "./editprofile.js";

export default function ProfileInfo() {
  const [Status, setStatus] = useState(0);
  const [Search, setSearch] = useState("Zoeken");

  if (Status === 1) {
    return <EditProfile />;
  } else {
    return (
      <div>
        <div className="profileHead">
          <div className="profile">
            <div>
  
                <div className="profileData">
                  <div className="dataBoxes">Hogeschool Rotterdam</div>
                  <div className="dataBoxes">hr@outlook.com</div>
                  <div className="dataBoxes">010 794 4000</div>
                  <div className="dataBoxes">0000000@hr.nl</div>
                  <div className="dataBoxes">010 794 4000</div>
                  <div className="dataBoxes">Wijnhaven</div>
                  <div className="dataBoxes">107</div>
                  <div className="dataBoxes">Rotterdam</div>
                  <div className="dataBoxes">3011 WN</div>
                </div>
             
            </div>
            <button className="EditProfile" onClick={() => setStatus(1)}>
              <LockIcon />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
