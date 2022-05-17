import React from "react";
import "./profile.css";
import Logo from "../Images/ErkenLogoScalable.png";
/*
import LockIcon from "@mui/icons-material/Lock";
*/

const EditProfile = () => {
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
            <button className="EditProfile" onClick={localStorage.setItem("Edit", true)}> Edit </button>


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
export default EditProfile;
