import React from "react";
import "./editprofile.css";

import ProfileInfo from "./profileinfo";
import CancelIcon from '@mui/icons-material/Cancel';

import { useState, useEffect } from "react";

export default function EditProfile() {
  const [Status, setStatus] = useState(1);

  const [Naam, setNaam] = useState("");
  const [Email, setEmail] = useState("");
  const [Telefoonnummer, setTelefoonnummer] = useState("");
  const [Emailverzorger, setEmailverzorger] = useState("");
  const [Telefoonnummerverzorger, setTelefoonnummerverzorger] = useState("");
  const [Straat, setStraat] = useState("");
  const [Huisnummer, setHuisnummer] = useState("");
  const [Woonplaats, setWoonplaats] = useState("");
  const [Postcode, setPostcode] = useState("");

  const CheckForData = async () => {
    try {
      const Username = "piet";
      //const Username = localStorage.getItem("username")
      const request = await fetch(`http://localhost:8500/Server/users/${Username}`);
      const data = await request.json();
      if (data[0].Naam !== "") {
        localStorage.setItem("Naam", data[0].Naam);
        localStorage.setItem("Email", data[0].Email);
        localStorage.setItem("Telefoonnummer", data[0].Telefoonnummer);
        localStorage.setItem("Emailverzorger", data[0].Emailverzorger);
        localStorage.setItem("Telefoonnummerverzorger", data[0].Telefoonnummerverzorger);
        localStorage.setItem("Straat", data[0].Straat);
        localStorage.setItem("Huisnummer", data[0].Huisnummer);
        localStorage.setItem("Woonplaats", data[0].Woonplaats);
        localStorage.setItem("Postcode", data[0].Postcode);
      } else {
        setStatus(2);
        
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  // useEffect(() => {
  //   CheckForData()
  // }, [])

  if (Status === 0) {
    return <ProfileInfo />;
  }
  else if(Status === 2) {
    return(
      <div>
        <h1>Error! Profile not found!</h1>
        <ProfileInfo />
      </div>
    );
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem("Naam", JSON.stringify(Naam));
    localStorage.setItem("Email", JSON.stringify(Email));
    localStorage.setItem("Telefoonnummer", JSON.stringify(Telefoonnummer));
    localStorage.setItem("Emailverzorger", JSON.stringify(Emailverzorger));
    localStorage.setItem(
      "Telefoonnummerverzorger",
      JSON.stringify(Telefoonnummerverzorger)
    );
    localStorage.setItem("Straat", JSON.stringify(Straat));
    localStorage.setItem("Huisnummer", JSON.stringify(Huisnummer));
    localStorage.setItem("Woonplaats", JSON.stringify(Woonplaats));
    localStorage.setItem("Postcode", JSON.stringify(Postcode));
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
                  value={Naam}
                  placeholder={localStorage.getItem("Naam")}
                  onChange={(e) => setNaam(e.target.value)}
                ></input>
                <input
                  className="EditdataBoxes"
                  title="Email"
                  value={Email}
                  placeholder={localStorage.getItem("Email")}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <input
                  className="EditdataBoxes"
                  title="Telefoonnummer"
                  value={Telefoonnummer}
                  placeholder={localStorage.getItem("Telefoonnummer")}
                  onChange={(e) => setTelefoonnummer(e.target.value)}
                ></input>
                <input
                  className="EditdataBoxes"
                  title="Email verzorger"
                  value={Emailverzorger}
                  placeholder={localStorage.getItem("Email verzorger")}
                  onChange={(e) => setEmailverzorger(e.target.value)}
                ></input>
                <input
                  className="EditdataBoxes"
                  title="Telefoonnummer verzorger"
                  id="Telefoonnummerverzorger"
                  value={Telefoonnummerverzorger}
                  placeholder={localStorage.getItem("Telefoonnummer verzorger")}
                  onChange={(e) => setTelefoonnummerverzorger(e.target.value)}
                ></input>
                <input
                  className="EditdataBoxes"
                  title="Straat"
                  id="Straat"
                  value={Straat}
                  placeholder={localStorage.getItem("Straat")}
                  onChange={(e) => setStraat(e.target.value)}
                ></input>
                <input
                  className="EditdataBoxes"
                  title="Huisnummer"
                  id="Huisnummer"
                  value={Huisnummer}
                  placeholder={localStorage.getItem("Huisnummer")}
                  onChange={(e) => setHuisnummer(e.target.value)}
                ></input>
                <input
                  className="EditdataBoxes"
                  title="Woonplaats"
                  id="Woonplaats"
                  value={Woonplaats}
                  placeholder={localStorage.getItem("Woonplaats")}
                  onChange={(e) => setWoonplaats(e.target.value)}
                ></input>
                <input
                  className="EditdataBoxes"
                  title="Postcode"
                  id="Postcode"
                  value={Postcode}
                  placeholder={localStorage.getItem("Postcode")}
                  onChange={(e) => setPostcode(e.target.value)}
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
