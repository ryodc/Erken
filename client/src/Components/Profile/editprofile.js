import React from "react";
import "./editprofile.css";
import Logo from "../Images/ErkenLogoScalable.png";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import SearchIcon from "@mui/icons-material/Search";

import { useState } from "react";

export const EditProfile = ({ showEditProfile, setEditProfile }) => {

  const [Edit, setEdit] = useState(false);

  const openEditProfile = () => {
    setEditProfile((prev) => !prev);
  };

  return (
    <div> 
      {showEditProfile ? (
    
      <div className="profileHead">
        <div className="profile">
            <div className="EditprofileData">
              <input className="EditdataBoxes" placeholder="Hogeschool Rotterdam"></input>
              <input className="EditdataBoxes" placeholder="hr@outlook.com"></input>
              <input className="EditdataBoxes" placeholder="010 794 4000"></input>
              <input className="EditdataBoxes" placeholder="0000000@hr.nl"></input>
              <input className="EditdataBoxes" placeholder="010 794 4000"></input>
              <input className="EditdataBoxes" placeholder="Wijnhaven"></input>
              <input className="EditdataBoxes" placeholder="107"></input>
              <input className="EditdataBoxes" placeholder="Rotterdam"></input>
              <input className="EditdataBoxes" placeholder="3011 WN"></input>
            </div>
        </div>
        <button className="Backbutton" onClick={() => setEditProfile((prev) => !prev)}><LockOpenIcon/></button>
        <button className="Savebutton" onClick={() => setEditProfile((prev) => !prev)}>Opslaan</button>
      </div>
      ) : null }
    </div>
  );
};
