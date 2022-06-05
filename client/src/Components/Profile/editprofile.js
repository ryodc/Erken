import React from "react";
import "./editprofile.css";

import LockOpenIcon from "@mui/icons-material/LockOpen";
import ProfileInfo from "./profileinfo";
import SearchIcon from "@mui/icons-material/Search";
import AttachmentIcon from "@mui/icons-material/Attachment";

import { useState } from "react";

export default function EditProfile() {
  const [Status, setStatus] = useState(1);
  //const [Search, setSearch] = useState("Zoeken");

  if (Status === 0) {
    return <ProfileInfo />;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    localStorage.setItem("Naam", JSON.stringify("Naam"));
    localStorage.setItem("Email", JSON.stringify("Email"));
    localStorage.setItem("Telefoonnummer", JSON.stringify("Telefoonnummer"));
    localStorage.setItem("Email verzorger", JSON.stringify("Email verzorger"));
    localStorage.setItem(
      "Telefoonnummer verzorger",
      JSON.stringify("Telefoonnummer verzorger")
    );
    localStorage.setItem("Straat", JSON.stringify("Straat"));
    localStorage.setItem("Huisnummer", JSON.stringify("Huisnummer"));
    localStorage.setItem("Woonplaats", JSON.stringify("Woonplaats"));
    localStorage.setItem("Postcode", JSON.stringify("Postcode"));
  };

  return (
    <div>
      <div className="profileHead">
        <div className="profile">
          <div>
            <div>
              <img
                className="profileImage"
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt="profile"
              />
              <button className="EditImage">
                <AttachmentIcon />
              </button>

              <form className="SearchBarContainer">
                <input
                  className="Searchbar"
                  placeholder="Zoeken"
                  type="text"
                ></input>
                <button className="SearchButton">
                  <SearchIcon />
                </button>
              </form>
            </div>
            <div className="profileContainer">
              <h1>Profiel</h1>
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
            </div>
            <form onSubmit={handleSubmit}>
              <div className="EditprofileData">
                <input
                  className="EditdataBoxes"
                  id="Naam"
                  placeholder="Hogeschool Rotterdam"
                ></input>
                <input
                  className="EditdataBoxes"
                  id="Email"
                  placeholder="hr@outlook.com"
                ></input>
                <input
                  className="EditdataBoxes"
                  id="Telefoonnummer"
                  placeholder="010 794 4000"
                ></input>
                <input
                  className="EditdataBoxes"
                  id="Email verzorger"
                  placeholder="0000000@hr.nl"
                ></input>
                <input
                  className="EditdataBoxes"
                  id="Telefoonnummer verzorger"
                  placeholder="010 794 4000"
                ></input>
                <input
                  className="EditdataBoxes"
                  id="Straat"
                  placeholder="Wijnhaven"
                ></input>
                <input
                  className="EditdataBoxes"
                  id="Huisnummer"
                  placeholder="107"
                ></input>
                <input
                  className="EditdataBoxes"
                  id="Woonplaats"
                  placeholder="Rotterdam"
                ></input>
                <input
                  className="EditdataBoxes"
                  id="Postcode"
                  placeholder="3011 WN"
                ></input>
              </div>
              <button className="Backbutton" onClick={() => setStatus(0)}>
                <LockOpenIcon />
              </button>
              <button className="Savebutton" onClick={() => setStatus(0)}>
                Opslaan
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
