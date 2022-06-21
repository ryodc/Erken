import React from "react";
import "./editprofile.css";

import ProfileInfo from "./profileinfo";
import DeleteIcon from '@mui/icons-material/Delete';
import { useState, useEffect } from "react";

export default function EditProfile() {
  const [Status, setStatus] = useState(1);
  const [change, setChange] = useState();

  const [Naam, setNaam] = useState("");
  const [Email, setEmail] = useState("");
  const [Telefoonnummer, setTelefoonnummer] = useState("");
  const [Emailverzorger, setEmailverzorger] = useState("");
  const [Telefoonnummerverzorger, setTelefoonnummerverzorger] = useState("");
  const [Straat, setStraat] = useState("");
  const [Huisnummer, setHuisnummer] = useState("");
  const [Woonplaats, setWoonplaats] = useState("");
  const [Postcode, setPostcode] = useState("");

  const loadValues = async () => {
    setNaam(localStorage.getItem('Naam'));
    setEmail(localStorage.getItem('Email'));
    setTelefoonnummer(localStorage.getItem('Telefoonnummer'));
    setEmailverzorger(localStorage.getItem('Emailverzorger'));
    setTelefoonnummerverzorger(localStorage.getItem('Telefoonnummerverzorger'));
    setStraat(localStorage.getItem('Straat'));
    setHuisnummer(localStorage.getItem('Huisnummer'));
    setWoonplaats(localStorage.getItem('Woonplaats'));
    setPostcode(localStorage.getItem('Postcode'));
  }

  const PreventSubmit = (event) => {
    if(change){
      event.preventDefault();
      console.log("submission prevented");
    }
    setStatus(0);
  };

  useEffect(() => {
    loadValues()
  }, [])

  if (Status === 0) {
    return <ProfileInfo />;
  }

  return (
    <div>
      <div className="profileHead">
        <div>
          <div>
            <form onSubmit={PreventSubmit}>
              <div className="EditprofileData">
                <input
                  className="EditdataBoxes"
                  title="Naam"
                  placeholder={Naam}
                  onChange={(e) =>  localStorage.setItem('Naam', e.target.value)}
                ></input>
                <input
                  className="EditdataBoxes"
                  title="Email"
                  placeholder={Email}
                  onChange={(e) => localStorage.setItem('Email', e.target.value)}
                ></input>
                <input
                  className="EditdataBoxes"
                  title="Telefoonnummer"
                  placeholder={Telefoonnummer}
                  onChange={(e) => localStorage.setItem('Telefoonnummer', e.target.value)}
                ></input>
                <input
                  className="EditdataBoxes"
                  title="Email verzorger"
                  placeholder={Emailverzorger}
                  onChange={(e) => localStorage.setItem('Emailverzorger', e.target.value)}
                ></input>
                <input
                  className="EditdataBoxes"
                  title="Telefoonnummer verzorger"
                  id="Telefoonnummerverzorger"
                  placeholder={Telefoonnummerverzorger}
                  onChange={(e) => localStorage.setItem('Telefoonnummerverzorger', e.target.value)}
                ></input>
                <input
                  className="EditdataBoxes"
                  title="Straat"
                  id="Straat"
                  placeholder={Straat}
                  onChange={(e) => localStorage.setItem('Straat', e.target.value)}
                ></input>
                <input
                  className="EditdataBoxes"
                  title="Huisnummer"
                  id="Huisnummer"
                  placeholder={Huisnummer}
                  onChange={(e) => localStorage.setItem('Huisnummer', e.target.value)}
                ></input>
                <input
                  className="EditdataBoxes"
                  title="Woonplaats"
                  id="Woonplaats"
                  placeholder={Woonplaats}
                  onChange={(e) => localStorage.setItem('Woonplaats', e.target.value)}
                ></input>
                <input
                  className="EditdataBoxes"
                  title="Postcode"
                  id="Postcode"
                  placeholder={Postcode}
                  onChange={(e) => localStorage.setItem("Postcode", e.target.value)}
                ></input>
              </div>
              <button className="Backbutton" type="reset" title="Leeg invoervelden" onClick={() => setChange(false)}>
                <DeleteIcon />
              </button>
              <button className="Savebutton" onClick={() => setChange(true)}>
                Opslaan
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
