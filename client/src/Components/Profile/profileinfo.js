import React, { useState, useEffect } from "react";
import "./profileinfo.css";

import LockIcon from "@mui/icons-material/Lock";
import EditProfile from "./editprofile.js";

export default function ProfileInfo() {
  const [Status, setStatus] = useState(0);
  const [users, setUsers] = useState([]);

  const [naam, setNaam] = useState(localStorage.getItem("Naam"));
  const [email, setEmail] = useState(localStorage.getItem("Email"));
  const [telefoonnummer, setTelefoonnummer] = useState(localStorage.getItem("Telefoonnummer"));
  const [emailverzorger, setEmailverzorger] = useState(localStorage.getItem("Emailverzorger"));
  const [telefoonnummerverzorger, setTelefoonnummerverzorger] = useState(localStorage.getItem("Telefoonnummerverzorger"));
  const [straat, setStraat] = useState(localStorage.getItem("Straat"));
  const [huisnummer, setHuisnummer] = useState(localStorage.getItem("Huisnummer"));
  const [woonplaats, setWoonplaats] = useState(localStorage.getItem("Woonplaats"));
  const [postcode, setPostcode] = useState(localStorage.getItem("Postcode"));

  const loadValues = async () => {
    setNaam(localStorage.getItem("Naam"));
    setEmail(localStorage.getItem("Email"));
    setTelefoonnummer(localStorage.getItem("Telefoonnummer"));
    setEmailverzorger(localStorage.getItem("Emailverzorger"));
    setTelefoonnummerverzorger(localStorage.getItem("Telefoonnummerverzorger"));
    setStraat(localStorage.getItem("Straat"));
    setHuisnummer(localStorage.getItem("Huisnummer"));
    setWoonplaats(localStorage.getItem("Woonplaats"));
    setPostcode(localStorage.getItem("Postcode"));
  }

  const setValues = async () => {
    localStorage.setItem("Naam", "Naam");
    localStorage.setItem("Email", "Email");
    localStorage.setItem("Telefoonnummer", "Telefoonnummer");
    localStorage.setItem("Emailverzorger", "Email verzorger");
    localStorage.setItem("Telefoonnummerverzorger", "Telefoonnummer verzorger");
    localStorage.setItem("Straat", "Straat");
    localStorage.setItem("Huisnummer", "Huisnummer");
    localStorage.setItem("Woonplaats", "Woonplaats");
    localStorage.setItem("Postcode", "Postcode");
  }

  useEffect(() => {
    setValues()
    loadValues()
  }, [])

  if (Status === 1) {
    return <EditProfile />;
  } else {
    return (
      <div>
        <div className="profileHead">
          <div className="profile">
            <div>
  
                <div className="profileData">
                  <div className="dataBoxes" title="Naam">{naam}</div>
                  <div className="dataBoxes" title="Email">{email}</div>
                  <div className="dataBoxes" title="Telefoonnummer">{telefoonnummer}</div>
                  <div className="dataBoxes" title="Email verzorger">{emailverzorger}</div>
                  <div className="dataBoxes" title="Telefoonnummer verzorger">{telefoonnummerverzorger}</div>
                  <div className="dataBoxes" title="Straat">{straat}</div>
                  <div className="dataBoxes" title="Huisnummer">{huisnummer}</div>
                  <div className="dataBoxes" title="Woonplaats">{woonplaats}</div>
                  <div className="dataBoxes" title="Postcode">{postcode}</div>
                </div>
            
            </div>
            <button className="EditProfile hover effect" title="Profiel bewerken" onClick={() => setStatus(1)}>
              <LockIcon />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

/*
                  <div className="dataBoxes" title="Naam">Hogeschool Rotterdam</div>
                  <div className="dataBoxes" title="Email">hr@outlook.com</div>
                  <div className="dataBoxes" title="Telefoonnummer">010 794 4000</div>
                  <div className="dataBoxes" title="Email verzorger">0000000@hr.nl</div>
                  <div className="dataBoxes" title="Telefoonnummer verzorger">010 794 4000</div>
                  <div className="dataBoxes" title="Straat">Wijnhaven</div>
                  <div className="dataBoxes" title="Huisnummer">107</div>
                  <div className="dataBoxes" title="Woonplaats">Rotterdam</div>
                  <div className="dataBoxes" title="Postcode">3011 WN</div>

*/