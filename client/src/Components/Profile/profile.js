import React, { useState, useEffect } from "react";
import ProfileInfo from "./profileinfo";
//import EditProfile from "./editprofile";
import AttachmentIcon from "@mui/icons-material/Attachment";
import "./profile.css";
import Sidebar from "../Default/sidebar";

function Profile({ setAuth }) {
  // const [profileinfo, setProfileinfo] = useState([]);

  // async function getProfileinfo() {
  //   const res = await fetch("http://localhost:5000/profile/", {
  //     method: "GET",
  //     headers: { token: localStorage.token }      
  //   });

  //   const profileArray = await res.json();
  //   console.log(profileArray);
  //   setProfileinfo(profileArray);
  // }

  // useEffect(() => {
  //   getProfileinfo();
  // })

  return (
    <div>
    <Sidebar/>
    <div className="profileContainer">
      <div>
        <img
          className="profileImage"
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="profile"
        />
      </div>
      <div className="profileDataContainer">
        <h1 className="profileTitle">Profiel</h1>
        <div className="ProfileDataNamesContainer">
          <div className="ProfileDataNamesContainer">Naam</div>
          <div className="ProfileDataNamesContainer">Email</div>
          <div className="ProfileDataNamesContainer">Telefoonnummer</div>
          <div className="ProfileDataNamesContainer">Straat</div>
          <div className="ProfileDataNamesContainer">Woonplaats</div>
          <div className="ProfileDataNamesContainer">Postcode</div>
        </div>
        <ProfileInfo />
      </div>
    </div>
    </div>
  );
}
export default Profile;
