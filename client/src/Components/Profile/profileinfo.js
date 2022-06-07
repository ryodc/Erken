import React, { useState } from "react";
import "./profileinfo.css";

import SearchIcon from "@mui/icons-material/Search";
import AttachmentIcon from "@mui/icons-material/Attachment";
import LockIcon from "@mui/icons-material/Lock";

import EditProfile from "./editprofile.js";

export default function ProfileInfo() {
  const [Status, setStatus] = useState(0);
  const [Search, setSearch] = useState("Zoeken");
  const [users, setUsers] = useState([]);
  
  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:8500/users");
      const jsonData = await response.json();
      setUsers(jsonData);
    } catch (error) {
      console.log(error.message);
    }
  };
  
  if (Status === 1) {
    return <EditProfile />;
  } else {
    return (
      <div>
        <div className="profileHead">
          <div className="profile">
            <div>
  
                <div className="profileData">
                  <div className="dataBoxes" title="Naam">Hogeschool Rotterdam</div>
                  <div className="dataBoxes" title="Email">hr@outlook.com</div>
                  <div className="dataBoxes" title="Telefoonnummer">010 794 4000</div>
                  <div className="dataBoxes" title="Email verzorger">0000000@hr.nl</div>
                  <div className="dataBoxes" title="Telefoonnummer verzorger">010 794 4000</div>
                  <div className="dataBoxes" title="Straat">Wijnhaven</div>
                  <div className="dataBoxes" title="Huisnummer">107</div>
                  <div className="dataBoxes" title="Woonplaats">Rotterdam</div>
                  <div className="dataBoxes" title="Postcode">3011 WN</div>
                </div>
             
            </div>
            <button className="EditProfile hover effect" title="Profiel bewerken" onClick={() => setStatus(1)}>
              <LockIcon />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
