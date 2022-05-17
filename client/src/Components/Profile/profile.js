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

          <div className="profileContainer">
            <h2>Profiel</h2> <LockIcon id="Size2" />
            <div className="ProfileDataNamesContainer">
              <p className="ProfileDataNames">Naam</p>
              <p className="ProfileDataNames">Email</p>
              <p className="ProfileDataNames">Telefoonnummer</p>
              <p className="ProfileDataNames">Email verzorger</p>
              <p className="ProfileDataNames">Telefoonnummer verzorger</p>
              <p className="ProfileDataNames">Straat</p>
              <p className="ProfileDataNames">Huisnummer</p>
              <p className="ProfileDataNames">Woonplaats</p>
              <p className="ProfileDataNames">Postcode</p>
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
