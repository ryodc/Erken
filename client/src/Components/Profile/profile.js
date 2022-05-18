import React from "react";
import "./profile.css";
import Logo from "../Images/ErkenLogoScalable.png";

import LockIcon from "@mui/icons-material/Lock";


const Profile = () => {
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

            <input className="Searchbar" placeholder="Zoeken"></input>
            <button className="EditProfile" onClick={localStorage.setItem("Edit", true)}><LockIcon/></button>

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
        </div>
      </div>
    </div>
  );
};
export default Profile;
