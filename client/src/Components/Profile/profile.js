import React, { useState, useEffect } from "react";
import ProfileInfo from "./profileinfo";
//import EditProfile from "./editprofile";
import AttachmentIcon from "@mui/icons-material/Attachment";
import "./profile.css";

function Profile({ setAuth }) {
  const [Search, setSearch] = useState("Zoeken");
  
  return (
    <div className="profileContainer">
      <div>
        <img
          className="profileImage"
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="profile"
        />
        <button className="EditImage">
          <AttachmentIcon />
        </button>
      </div>
      <div className="profileDataContainer">
        <h1 className="profileTitle">Profiel</h1>
        <div className="ProfileDataNamesContainer">
          <div className="ProfileDataNamesContainer">Naam</div>
          <div className="ProfileDataNamesContainer">Email</div>
          <div className="ProfileDataNamesContainer">Telefoonnummer</div>
          <div className="ProfileDataNamesContainer">Email verzorger</div>
          <div className="ProfileDataNamesContainer">
            Telefoonnummer verzorger
          </div>
          <div className="ProfileDataNamesContainer">Straat</div>
          <div className="ProfileDataNamesContainer">Huisnummer</div>
          <div className="ProfileDataNamesContainer">Woonplaats</div>
          <div className="ProfileDataNamesContainer">Postcode</div>
        </div>
        <ProfileInfo />
      </div>
    </div>
  );
}
export default Profile;
