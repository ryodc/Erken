import React from "react";
import "./editprofile.css";

import ProfileInfo from "./profileinfo";
import CancelIcon from '@mui/icons-material/Cancel';

import { useState } from "react";

export default function EditProfile() {
  const [Status, setStatus] = useState(1);
  const [Naam, setNaam] = useState();
  const [Email, setEmail] = useState();
  const [Telefoonnummer, setTelefoonnummer] = useState();
  const [Emailverzorger, setEmailverzorger] = useState();
  const [Telefoonnummerverzorger, setTelefoonnummerverzorger] = useState();
  const [Straat, setStraat] = useState();
  const [Huisnummer, setHuisnummer] = useState();
  const [Woonplaats, setWoonplaats] = useState();
  const [Postcode, setPostcode] = useState();

  if (Status === 0) {
    return <ProfileInfo />;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem("Naam", Naam);
    localStorage.setItem("Email", Email);
    localStorage.setItem("Telefoonnummer", Telefoonnummer);
    localStorage.setItem("Emailverzorger", Emailverzorger);
    localStorage.setItem(
      "Telefoonnummerverzorger",
      Telefoonnummerverzorger
    );
    localStorage.setItem("Straat", Straat);
    localStorage.setItem("Huisnummer", Huisnummer);
    localStorage.setItem("Woonplaats", Woonplaats);
    localStorage.setItem("Postcode", Postcode);
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
                  onChange={(e) => setNaam(e.target.value)}
                ></input>
                <input
                  className="EditdataBoxes"
                  title="Email"
                  id="Email"
                  placeholder={localStorage.getItem("Email")}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <input
                  className="EditdataBoxes"
                  title="Telefoonnummer"
                  id="Telefoonnummer"
                  placeholder={localStorage.getItem("Telefoonnummer")}
                  onChange={(e) => setTelefoonnummer(e.target.value)}
                ></input>
                <input
                  className="EditdataBoxes"
                  title="Email verzorger"
                  id="Emailverzorger"
                  placeholder={localStorage.getItem("Email verzorger")}
                  onChange={(e) => setEmailverzorger(e.target.value)}
                ></input>
                <input
                  className="EditdataBoxes"
                  title="Telefoonnummer verzorger"
                  id="Telefoonnummerverzorger"
                  placeholder={localStorage.getItem("Telefoonnummer verzorger")}
                  onChange={(e) => setTelefoonnummerverzorger(e.target.value)}
                ></input>
                <input
                  className="EditdataBoxes"
                  title="Straat"
                  id="Straat"
                  placeholder={localStorage.getItem("Straat")}
                  onChange={(e) => setStraat(e.target.value)}
                ></input>
                <input
                  className="EditdataBoxes"
                  title="Huisnummer"
                  id="Huisnummer"
                  placeholder={localStorage.getItem("Huisnummer")}
                  onChange={(e) => setHuisnummer(e.target.value)}
                ></input>
                <input
                  className="EditdataBoxes"
                  title="Woonplaats"
                  id="Woonplaats"
                  placeholder={localStorage.getItem("Woonplaats")}
                  onChange={(e) => setWoonplaats(e.target.value)}
                ></input>
                <input
                  className="EditdataBoxes"
                  title="Postcode"
                  id="Postcode"
                  placeholder={localStorage.getItem("Postcode")}
                  onChange={(e) => setPostcode(e.target.value)}
                ></input>
              </div>
              <button className="Backbutton" title="Annuleren" onClick={() => setStatus(0)}>
                <CancelIcon />
              </button>
              <button className="Savebutton" type="submit" onClick={() => setStatus(0)}>
                Opslaan
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
