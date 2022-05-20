import React from "react";
import "./profile.css";
import Logo from "../Images/ErkenLogoScalable.png";
import LockIcon from "@mui/icons-material/Lock";
import SearchIcon from "@mui/icons-material/Search";

import { useState } from "react";

export const EditProfile = ({ showShowEvent, setShowEvent }) => {

  const [showEditProfile, setEditProfile] = useState(false);

  const openEditProfile = () => {
    setEditProfile((prev) => !prev);
  };

  return (
    <div className="profileHead">
      <img className="logo" src={Logo} alt="Logo"></img>
      <div className="profile">
        <div>
          <img
            className="profileImage"
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="profile"
          />


          <EditProfile showEditProfile={showEditProfile} setEditProfile={setEditProfile} />
          <button className="EditProfile" onClick={openEditProfile}><LockIcon/></button>


              <div className="profileContainer">
                <h2>Profiel</h2>
                <div className="ProfileDataNamesContainer">
                  <p>Naam</p>
                  <p>Email</p>
                  <p>Telefoonnummer</p>
                  <p>Email verzorger</p>
                  <p>Telefoonnummer verzorger</p>
                  <p>Straat</p>
                  <p>Huisnummer</p>
                  <p>Woonplaats</p>
                  <p>Postcode</p>
                </div>
                <div className="profileData">
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
        </div>
      </div>
    </div>
  );
};
