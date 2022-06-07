import React from "react";
import "./editprofile.css";

import LockOpenIcon from "@mui/icons-material/LockOpen";
import ProfileInfo from "./profileinfo";
import CancelIcon from '@mui/icons-material/Cancel';

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
        <div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="EditprofileData">
                <input
                  className="EditdataBoxes"
                  title="Naam"
                  id="Naam"
                  placeholder={localStorage.getItem("Naam")}
                ></input>
                <input
                  className="EditdataBoxes"
                  title="Email"
                  id="Email"
                  placeholder="hr@outlook.com"
                ></input>
                <input
                  className="EditdataBoxes"
                  title="Telefoonnummer"
                  id="Telefoonnummer"
                  placeholder="010 794 4000"
                ></input>
                <input
                  className="EditdataBoxes"
                  title="Email verzorger"
                  id="Email verzorger"
                  placeholder="0000000@hr.nl"
                ></input>
                <input
                  className="EditdataBoxes"
                  title="Telefoonnummer verzorger"
                  id="Telefoonnummer verzorger"
                  placeholder="010 794 4000"
                ></input>
                <input
                  className="EditdataBoxes"
                  title="Straat"
                  id="Straat"
                  placeholder="Wijnhaven"
                ></input>
                <input
                  className="EditdataBoxes"
                  title="Huisnummer"
                  id="Huisnummer"
                  placeholder="107"
                ></input>
                <input
                  className="EditdataBoxes"
                  title="Woonplaats"
                  id="Woonplaats"
                  placeholder="Rotterdam"
                ></input>
                <input
                  className="EditdataBoxes"
                  title="Postcode"
                  id="Postcode"
                  placeholder="3011 WN"
                ></input>
              </div>
              <button className="Backbutton" title="Annuleren" onClick={() => setStatus(0)}>
                <CancelIcon />
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
