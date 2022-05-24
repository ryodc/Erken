import React from "react";
import "./profile.css";
import Logo from "../Images/ErkenLogoScalable.png";

import LockIcon from "@mui/icons-material/Lock";
import SearchIcon from "@mui/icons-material/Search";
import Search from "@mui/icons-material/Search";
import AttachmentIcon from '@mui/icons-material/Attachment';

import { EditProfile } from "./editprofile.js";
import { useState } from "react";


function Profile () {
  
  const [showEditProfile, setEditProfile] = useState(false);

  const openEditProfile = () => {
    setEditProfile((prev) => !prev);
  };
  
  return (
    <div>
      <div className="profileHead">
        <img className="logo" src={Logo} alt="Logo"></img>
        <div className="profile">
          <div>
            <img
              className="profileImage"
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="profile"
            />
            <button className="EditImage"><AttachmentIcon /></button>

            <form className="SearchBarContainer">
              <input className="Searchbar" placeholder="Zoeken" type="text"></input>
              <button className="SearchButton" onClick={localStorage.setItem("Search",{Search})}><SearchIcon/></button>
            </form>

            
            
            <div className="profileContainer">
              <h2>Profiel</h2>
              <div className="ProfileDataNamesContainer">
                <div className="ProfileDataNamesContainer">Naam</div>
                <div className="ProfileDataNamesContainer">Email</div>
                <div className="ProfileDataNamesContainer">Telefoonnummer</div>
                <div className="ProfileDataNamesContainer">Email verzorger</div>
                <div className="ProfileDataNamesContainer">Telefoonnummer verzorger</div>
                <div className="ProfileDataNamesContainer">Straat</div>
                <div className="ProfileDataNamesContainer">Huisnummer</div>
                <div className="ProfileDataNamesContainer">Woonplaats</div>
                <div className="ProfileDataNamesContainer">Postcode</div>
              </div>
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

            <EditProfile showEditProfile={showEditProfile} setEditProfile={setEditProfile} />
            <button className="EditProfile" onClick={openEditProfile}><LockIcon/></button>
          
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
