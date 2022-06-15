import React from "react";
import "./editprofile.css";

import ProfileInfo from "./profileinfo";
import CancelIcon from '@mui/icons-material/Cancel';

import { useState } from "react";

export default function EditProfile() {
  const [Status, setStatus] = useState(1);
  const [Bedrijf, setBedrijf] = useState();
  const [Naam, setNaam] = useState();
  const [Functie, setFunctie] = useState();
  const [Email, setEmail] = useState();
  const [Website, setWebsite] = useState();
  const [ContactNum, setContactNum] = useState();
  const [Gender, setGender] = useState();

  if (Status === 0) {
    return <ProfileInfo />;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem("Naam", JSON.stringify("Naam"));
    localStorage.setItem("Email", JSON.stringify("Email"));
    localStorage.setItem("Telefoonnummer", JSON.stringify("Telefoonnummer"));
    localStorage.setItem("Emailverzorger", JSON.stringify("Emailverzorger"));
    localStorage.setItem(
      "Telefoonnummerverzorger",
      JSON.stringify("Telefoonnummerverzorger")
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
                  onChange={(e) => setNaam(e.target.value)}
                ></input>
                <input
                  className="EditdataBoxes"
                  title="Email"
                  id="Email"
                  placeholder={localStorage.getItem("Email")}
                  onChange={(e) => setNaam(e.target.value)}
                ></input>
                <input
                  className="EditdataBoxes"
                  title="Telefoonnummer"
                  id="Telefoonnummer"
                  placeholder={localStorage.getItem("Telefoonnummer")}
                ></input>
                <input
                  className="EditdataBoxes"
                  title="Email verzorger"
                  id="Emailverzorger"
                  placeholder={localStorage.getItem("Email verzorger")}
                ></input>
                <input
                  className="EditdataBoxes"
                  title="Telefoonnummer verzorger"
                  id="Telefoonnummerverzorger"
                  placeholder={localStorage.getItem("Telefoonnummer verzorger")}
                ></input>
                <input
                  className="EditdataBoxes"
                  title="Straat"
                  id="Straat"
                  placeholder={localStorage.getItem("Straat")}
                ></input>
                <input
                  className="EditdataBoxes"
                  title="Huisnummer"
                  id="Huisnummer"
                  placeholder={localStorage.getItem("Huisnummer")}
                ></input>
                <input
                  className="EditdataBoxes"
                  title="Woonplaats"
                  id="Woonplaats"
                  placeholder={localStorage.getItem("Woonplaats")}
                ></input>
                <input
                  className="EditdataBoxes"
                  title="Postcode"
                  id="Postcode"
                  placeholder={localStorage.getItem("Postcode")}
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
